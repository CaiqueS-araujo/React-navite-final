import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Jersey10_400Regular, useFonts } from "@expo-google-fonts/jersey-10";
import { fetchFullStats } from "../../Data/api";
import { calcDmg, sleep } from "../../Utils/calcDmg";
import { PokemonBattle, BattleResult } from "../../Types/pokemon";
import { useTeam } from "../../Context/TeamContext";
import BattleArena, { BattleState } from "../../Components/BattleArena";
import { styles } from "./styles";

export default function Battles() {
  const navigation = useNavigation<any>();
  const { team } = useTeam();
  const [fontsLoaded] = useFonts({ Jersey10_400Regular });

  const [darkMode, setDarkMode] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number[]>([]);
  const [enemyTeam, setEnemyTeam] = useState<PokemonBattle[]>([]);
  const [loadingEnemy, setLoadingEnemy] = useState(false);
  const [battleStarted, setBattleStarted] = useState(false);
  const [bs, setBs] = useState<BattleState | null>(null);
  const [log, setLog] = useState("Escolha 3 Pokémon para batalhar.");
  const [busy, setBusy] = useState(false);
  const [battleOver, setBattleOver] = useState<BattleResult>(null);

  const goToBattle = useCallback(async () => {
    setSelectedIdx([]);
    setBattleStarted(false);
    setBattleOver(null);
    setBs(null);
    setLog("Escolha 3 Pokémon para batalhar.");
    setLoadingEnemy(true);
    const ids: number[] = [];
    while (ids.length < 3) {
      const n = Math.floor(Math.random() * 386) + 1;
      if (!ids.includes(n)) ids.push(n);
    }
    try {
      const details = await Promise.all(ids.map(fetchFullStats));
      setEnemyTeam(details);
    } catch {
      setEnemyTeam([]);
    }
    setLoadingEnemy(false);
  }, []);

  useEffect(() => {
    goToBattle();
  }, [goToBattle]);

  const toggleSelect = (idx: number) => {
    setSelectedIdx((prev) => {
      if (prev.includes(idx)) return prev.filter((i) => i !== idx);
      if (prev.length >= 3) return prev;
      return [...prev, idx];
    });
  };

  const startBattle = async () => {
    const pQueue = await Promise.all(
      selectedIdx.map((i) => fetchFullStats(team[i].id)),
    );
    const eQueue = enemyTeam.map((p) => ({ ...p }));
    setBs({ pQueue, eQueue, pIdx: 0, eIdx: 0 });
    setBattleStarted(true);
    setLog(
      `${pQueue[0].name.toUpperCase()} vs ${eQueue[0].name.toUpperCase()}! Escolha um ataque.`,
    );
    setBusy(false);
    setBattleOver(null);
  };

  const useMove = async (moveIdx: number) => {
    if (!bs || busy || battleOver) return;
    setBusy(true);

    const state: BattleState = JSON.parse(JSON.stringify(bs));
    const { pQueue, eQueue } = state;
    let { pIdx, eIdx } = state;
    const pl = pQueue[pIdx];
    const en = eQueue[eIdx];

    const moveName = pl.moves[moveIdx] || "investida";
    const power =
      moveIdx === 0
        ? Math.round(40 + pl.atk * 0.3)
        : Math.round(60 + pl.atk * 0.2);
    const dmg = calcDmg(pl.atk, en.def, power);
    en.hp = Math.max(0, en.hp - dmg);
    setLog(
      `${pl.name.toUpperCase()} usou ${moveName
        .replace(/-/g, " ")
        .toUpperCase()}! Causou ${dmg} de dano.`,
    );
    setBs({ pQueue, eQueue, pIdx, eIdx });
    await sleep(1400);

    if (en.hp <= 0) {
      eIdx++;
      if (eIdx >= eQueue.length) {
        setLog("Todos os inimigos derrotados! VOCÊ VENCEU!");
        setBattleOver("win");
        setBusy(false);
        return;
      }
      setLog(
        `${en.name.toUpperCase()} desmaiou! ${eQueue[eIdx].name.toUpperCase()} entrou em campo!`,
      );
      setBs({ pQueue, eQueue, pIdx, eIdx });
      setBusy(false);
      return;
    }

    const ePower = Math.round(40 + en.atk * 0.25);
    const eMove =
      en.moves[Math.floor(Math.random() * en.moves.length)] || "tackle";
    const eDmg = calcDmg(en.atk, pl.def, ePower);
    pl.hp = Math.max(0, pl.hp - eDmg);
    setLog(
      `${en.name.toUpperCase()} usou ${eMove
        .replace(/-/g, " ")
        .toUpperCase()}! Causou ${eDmg} de dano.`,
    );
    setBs({ pQueue, eQueue, pIdx, eIdx });
    await sleep(1400);

    if (pl.hp <= 0) {
      pIdx++;
      if (pIdx >= pQueue.length) {
        setLog("Todos os seus Pokémon desmaiaram! VOCÊ PERDEU.");
        setBattleOver("loss");
        setBusy(false);
        return;
      }
      setLog(
        `${pl.name.toUpperCase()} desmaiou! ${pQueue[pIdx].name.toUpperCase()} vai para batalha!`,
      );
    } else {
      setLog("Escolha um ataque.");
    }
    setBs({ pQueue, eQueue, pIdx, eIdx });
    setBusy(false);
  };

  if (!fontsLoaded) return null;

  if (team.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Você ainda não tem Pokémon no time.</Text>
        <Pressable style={styles.emptyBtn} onPress={() => navigation.navigate("team")}>
          <Text style={styles.emptyBtnText}>MONTAR TIME</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <View style={styles.topBar}>
        <Pressable
          onPress={() => setDarkMode((d) => !d)}
          style={styles.darkToggle}
          accessibilityLabel="Alternar modo claro e escuro"
        >
          <Text style={styles.darkToggleText}>
            {darkMode ? "☀ MODO CLARO" : "☾ MODO ESCURO"}
          </Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <BattleArena
          bs={bs}
          log={log}
          busy={busy}
          battleOver={battleOver}
          onUseMove={useMove}
          onRestart={goToBattle}
          team={team}
          selectedIdx={selectedIdx}
          enemyTeam={enemyTeam}
          loadingEnemy={loadingEnemy}
          battleStarted={battleStarted}
          onToggleSelect={toggleSelect}
          onStartBattle={startBattle}
          darkMode={darkMode}
        />
      </ScrollView>
    </View>
  );
}
