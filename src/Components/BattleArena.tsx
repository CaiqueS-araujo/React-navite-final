import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONT_PIXEL, arenaGradient } from "../Themes/gameTheme";
import { spriteFront, spriteBack } from "../Utils/sprites";
import { PokemonLite, PokemonBattle, BattleResult } from "../Types/pokemon";
import HpBar from "./HpBar";
import BattleLog from "./BattleLog";
import AttackButtons from "./AttackButtons";

export interface BattleState {
  pQueue: PokemonBattle[];
  eQueue: PokemonBattle[];
  pIdx: number;
  eIdx: number;
}

interface BattleArenaProps {
  bs: BattleState | null;
  log: string;
  busy: boolean;
  battleOver: BattleResult;
  onUseMove: (moveIdx: number) => void;
  onRestart: () => void;
  team: PokemonLite[];
  selectedIdx: number[];
  enemyTeam: PokemonBattle[];
  loadingEnemy: boolean;
  battleStarted: boolean;
  onToggleSelect: (idx: number) => void;
  onStartBattle: () => void;
  darkMode?: boolean;
}

function PokemonInfo({
  pokemon,
  enemy,
}: {
  pokemon: PokemonBattle | undefined;
  enemy?: boolean;
}) {
  if (!pokemon) return null;
  return (
    <View
      style={[
        styles.infoBox,
        {
          backgroundColor: enemy ? COLORS.vermelho : COLORS.azulEscuro,
          borderColor: enemy ? COLORS.vermelhoForte : COLORS.azul,
        },
      ]}
    >
      <Text style={styles.infoTag}>{enemy ? "⚠ INIMIGO" : "★ SEU POKÉMON"}</Text>
      <Text style={styles.infoName} numberOfLines={1}>
        {pokemon.name}
      </Text>
      <HpBar current={pokemon.hp} max={pokemon.maxHp} label="PS" />
    </View>
  );
}

export default function BattleArena(props: BattleArenaProps) {
  const {
    bs,
    log,
    busy,
    battleOver,
    onUseMove,
    onRestart,
    team,
    selectedIdx,
    enemyTeam,
    loadingEnemy,
    battleStarted,
    onToggleSelect,
    onStartBattle,
    darkMode = false,
  } = props;

  const player = bs?.pQueue[bs.pIdx];
  const enemy = bs?.eQueue[bs.eIdx];

  const BattleField = ({ showPokemon }: { showPokemon: boolean }) => (
    <LinearGradient
      colors={arenaGradient(darkMode)}
      style={styles.field}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.ground} />

      {showPokemon ? (
        <>
          {enemy && (
            <View style={styles.enemySpot}>
              <Text style={styles.enemyLabel} numberOfLines={1}>
                {enemy.name}
              </Text>
              <Image source={{ uri: spriteFront(enemy.id) }} style={styles.fighter} />
            </View>
          )}
          {player && (
            <View style={styles.playerSpot}>
              <Text style={styles.playerLabel} numberOfLines={1}>
                {player.name}
              </Text>
              <Image source={{ uri: spriteBack(player.id) }} style={styles.fighter} />
            </View>
          )}
        </>
      ) : loadingEnemy ? (
        <View style={styles.fieldCenter}>
          <ActivityIndicator color="rgba(255,255,255,0.6)" />
          <Text style={styles.fieldHint}>GERANDO INIMIGOS...</Text>
        </View>
      ) : (
        <View style={styles.previewRow}>
          {enemyTeam.map((p) => (
            <Image key={p.id} source={{ uri: spriteFront(p.id) }} style={styles.previewSprite} />
          ))}
        </View>
      )}
    </LinearGradient>
  );

  if (battleStarted) {
    return (
      <View>
        <BattleField showPokemon />
        <View style={styles.bottomPanel}>
          <View style={styles.infoRow}>
            <PokemonInfo pokemon={enemy} enemy />
            <PokemonInfo pokemon={player} />
          </View>

          <BattleLog log={log} busy={busy} battleOver={battleOver} />

          {!battleOver && <AttackButtons pokemon={player} busy={busy} onUseMove={onUseMove} />}

          {battleOver && (
            <View
              style={[
                styles.resultBox,
                {
                  borderColor: battleOver === "win" ? COLORS.amarelo : COLORS.vermelhoForte,
                  backgroundColor:
                    battleOver === "win" ? "rgba(235,217,55,0.12)" : "rgba(204,0,0,0.12)",
                },
              ]}
            >
              <Text
                style={[
                  styles.resultTitle,
                  { color: battleOver === "win" ? COLORS.amarelo : COLORS.vermelhoForte },
                ]}
              >
                {battleOver === "win" ? "🏆 VITÓRIA!" : "💀 DERROTA!"}
              </Text>
              <Text style={styles.resultSub}>
                {battleOver === "win"
                  ? "Seu time derrotou todos os inimigos!"
                  : "Todos os seus Pokémon desmaiaram."}
              </Text>
              <Pressable onPress={onRestart} style={styles.restartBtn}>
                <Text style={styles.restartText}>JOGAR NOVAMENTE</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    );
  }

  return (
    <View>
      <BattleField showPokemon={false} />
      <View style={styles.bottomPanel}>
        <Text style={styles.selectTitle}>
          ESCOLHA 3 POKÉMON ({selectedIdx.length}/3)
        </Text>

        <View style={styles.selectColumns}>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>SEU TIME</Text>
            {team.map((p, i) => {
              const sel = selectedIdx.includes(i);
              return (
                <Pressable
                  key={p.id}
                  onPress={() => onToggleSelect(i)}
                  style={[styles.unit, sel ? styles.unitSel : styles.unitOff]}
                >
                  <Image source={{ uri: spriteFront(p.id) }} style={styles.unitSprite} />
                  <Text
                    style={[styles.unitName, { color: sel ? COLORS.amarelo : COLORS.branco }]}
                    numberOfLines={1}
                  >
                    {p.name}
                  </Text>
                  {sel && <Text style={styles.check}>✓</Text>}
                </Pressable>
              );
            })}
          </View>

          <View style={styles.column}>
            <Text style={[styles.columnTitle, { color: COLORS.vermelhoClaro }]}>INIMIGOS</Text>
            {loadingEnemy ? (
              <Text style={styles.loadingSmall}>CARREGANDO...</Text>
            ) : (
              enemyTeam.map((p) => (
                <View key={p.id} style={[styles.unit, styles.unitEnemy]}>
                  <Image source={{ uri: spriteFront(p.id) }} style={styles.unitSprite} />
                  <Text style={styles.unitName} numberOfLines={1}>
                    {p.name}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>

        <Pressable onPress={onStartBattle} disabled={selectedIdx.length !== 3 || loadingEnemy}>
          <LinearGradient
            colors={
              selectedIdx.length === 3
                ? [COLORS.amarelo, COLORS.amareloClaro]
                : ["rgba(235,217,55,0.18)", "rgba(235,217,55,0.18)"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.startBtn, { opacity: selectedIdx.length === 3 ? 1 : 0.5 }]}
          >
            <Text style={styles.startText}>BATALHAR!</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    minHeight: 190,
    borderWidth: 3,
    borderColor: COLORS.amarelo,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  ground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 44,
    backgroundColor: "rgba(20,60,20,0.5)",
    borderTopWidth: 2,
    borderTopColor: "rgba(100,200,100,0.3)",
  },
  fieldCenter: { flex: 1, alignItems: "center", justifyContent: "center", gap: 8 },
  fieldHint: { fontFamily: FONT_PIXEL, fontSize: 8, color: "rgba(255,255,255,0.5)" },
  previewRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 20,
  },
  previewSprite: { width: 80, height: 80 },
  enemySpot: { alignItems: "center", alignSelf: "flex-start", zIndex: 1 },
  playerSpot: { alignItems: "center", zIndex: 1 },
  enemyLabel: {
    fontFamily: FONT_PIXEL,
    fontSize: 7,
    color: COLORS.vermelhoClaro,
    textTransform: "uppercase",
    marginBottom: 3,
  },
  playerLabel: {
    fontFamily: FONT_PIXEL,
    fontSize: 7,
    color: COLORS.amarelo,
    textTransform: "uppercase",
    marginBottom: 3,
  },
  fighter: { width: 120, height: 120 },
  bottomPanel: {
    backgroundColor: COLORS.azulEscuro,
    borderWidth: 3,
    borderTopWidth: 0,
    borderColor: COLORS.amarelo,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 14,
    marginBottom: 10,
  },
  infoRow: { flexDirection: "row", gap: 8, marginBottom: 12 },
  infoBox: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  infoTag: {
    fontFamily: FONT_PIXEL,
    fontSize: 7,
    color: COLORS.amarelo,
    textTransform: "uppercase",
    marginBottom: 5,
    letterSpacing: 1,
  },
  infoName: {
    fontFamily: FONT_PIXEL,
    fontSize: 8,
    color: COLORS.branco,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  resultBox: { borderWidth: 3, borderRadius: 10, padding: 18, alignItems: "center" },
  resultTitle: { fontFamily: FONT_PIXEL, fontSize: 14, marginBottom: 8, textAlign: "center" },
  resultSub: {
    fontFamily: FONT_PIXEL,
    fontSize: 7,
    color: "rgba(255,255,255,0.7)",
    marginBottom: 14,
    lineHeight: 14,
    textAlign: "center",
  },
  restartBtn: {
    backgroundColor: COLORS.amarelo,
    borderWidth: 3,
    borderColor: COLORS.azulEscuro,
    borderBottomWidth: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  restartText: { fontFamily: FONT_PIXEL, fontSize: 9, color: COLORS.amareloTexto },
  selectTitle: {
    fontFamily: FONT_PIXEL,
    fontSize: 8,
    color: COLORS.amarelo,
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 10,
  },
  selectColumns: { flexDirection: "row", gap: 12, marginBottom: 14 },
  column: { flex: 1, gap: 5 },
  columnTitle: {
    fontFamily: FONT_PIXEL,
    fontSize: 6,
    color: COLORS.amarelo,
    letterSpacing: 1,
    marginBottom: 6,
  },
  unit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  unitSel: { backgroundColor: "rgba(235,217,55,0.18)", borderColor: COLORS.amarelo },
  unitOff: { backgroundColor: "rgba(25,34,46,0.6)", borderColor: "rgba(255,255,255,0.15)" },
  unitEnemy: { backgroundColor: "rgba(129,31,24,0.3)", borderColor: "rgba(129,31,24,0.5)" },
  unitSprite: { width: 36, height: 36 },
  unitName: {
    flex: 1,
    fontFamily: FONT_PIXEL,
    fontSize: 6,
    color: COLORS.branco,
    textTransform: "uppercase",
  },
  check: { fontFamily: FONT_PIXEL, fontSize: 9, color: COLORS.amarelo },
  loadingSmall: {
    fontFamily: FONT_PIXEL,
    fontSize: 7,
    color: "rgba(255,255,255,0.4)",
    paddingVertical: 8,
  },
  startBtn: {
    paddingVertical: 13,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: COLORS.azulEscuro,
    borderBottomWidth: 6,
    alignItems: "center",
  },
  startText: {
    fontFamily: FONT_PIXEL,
    fontSize: 10,
    color: COLORS.amareloTexto,
    letterSpacing: 1,
  },
});
