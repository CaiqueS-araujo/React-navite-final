import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONT_PIXEL } from "../Themes/gameTheme";
import { GEN_RANGES } from "../Utils/constants";
import { PokemonLite } from "../Types/pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonGridProps {
  catalog: PokemonLite[];
  loadingCat: boolean;
  team: PokemonLite[];
  genIdx: number;
  search: string;
  searchResult: PokemonLite | null;
  searching: boolean;
  onAdd: (p: PokemonLite) => void;
  onSearch: () => void;
  onSearchChange: (text: string) => void;
  onClearSearch: () => void;
  onGenChange: (i: number) => void;
  onGoToBattle: () => void;
}

export default function PokemonGrid({
  catalog,
  loadingCat,
  team,
  genIdx,
  search,
  searchResult,
  searching,
  onAdd,
  onSearch,
  onSearchChange,
  onClearSearch,
  onGenChange,
  onGoToBattle,
}: PokemonGridProps) {
  const inTeam = (id: number) => team.some((p) => p.id === id);
  const display = searchResult ? [searchResult] : catalog;

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput
          value={search}
          onChangeText={onSearchChange}
          onSubmitEditing={onSearch}
          placeholder="Nome ou número..."
          placeholderTextColor="rgba(255,255,255,0.4)"
          style={styles.input}
          returnKeyType="search"
          autoCapitalize="none"
        />
        <Pressable
          onPress={onSearch}
          disabled={searching}
          style={styles.searchBtn}
          accessibilityLabel="Buscar Pokémon"
        >
          <Text style={styles.searchBtnText}>{searching ? "..." : "🔍"}</Text>
        </Pressable>
        {searchResult && (
          <Pressable onPress={onClearSearch} style={styles.clearBtn} accessibilityLabel="Limpar busca">
            <Text style={styles.clearBtnText}>✕</Text>
          </Pressable>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.genRow}
      >
        {GEN_RANGES.map((g, i) => {
          const active = genIdx === i;
          return (
            <Pressable
              key={g.label}
              onPress={() => onGenChange(i)}
              style={[styles.genBtn, active && styles.genBtnActive]}
            >
              <Text style={[styles.genText, active && styles.genTextActive]}>{g.label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.gridBox}>
        {loadingCat ? (
          <View style={styles.loading}>
            <ActivityIndicator color={COLORS.amarelo} />
            <Text style={styles.loadingText}>CARREGANDO...</Text>
          </View>
        ) : (
          <View style={styles.grid}>
            {display.map((p) => (
              <PokemonCard
                key={p.id}
                pokemon={p}
                inTeam={inTeam(p.id)}
                teamFull={team.length >= 6}
                onAdd={onAdd}
              />
            ))}
          </View>
        )}
      </View>

      {team.length > 0 && (
        <Pressable onPress={onGoToBattle}>
          <LinearGradient
            colors={[COLORS.amarelo, COLORS.amareloClaro]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.battleBtn}
          >
            <Text style={styles.battleBtnText}>BATALHAR</Text>
          </LinearGradient>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 14 },
  searchRow: { flexDirection: "row", gap: 6, marginBottom: 10 },
  input: {
    flex: 1,
    backgroundColor: COLORS.azulEscuro,
    borderWidth: 3,
    borderColor: COLORS.azul,
    color: COLORS.branco,
    fontFamily: FONT_PIXEL,
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
  },
  searchBtn: {
    backgroundColor: COLORS.azulEscuro,
    borderWidth: 2,
    borderColor: COLORS.amarelo,
    paddingHorizontal: 12,
    borderRadius: 6,
    justifyContent: "center",
  },
  searchBtnText: { fontSize: 22 },
  clearBtn: {
    backgroundColor: COLORS.vermelhoForte,
    borderWidth: 2,
    borderColor: COLORS.azulEscuro,
    paddingHorizontal: 10,
    borderRadius: 6,
    justifyContent: "center",
  },
  clearBtnText: { color: COLORS.branco, fontSize: 22 },
  genRow: { gap: 4, marginBottom: 12, paddingBottom: 3 },
  genBtn: {
    backgroundColor: COLORS.azulEscuro,
    borderWidth: 2,
    borderColor: COLORS.amarelo,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  genBtnActive: { backgroundColor: COLORS.amarelo },
  genText: { fontFamily: FONT_PIXEL, fontSize: 13, color: COLORS.amareloClaro },
  genTextActive: { color: COLORS.amareloTexto },
  gridBox: {
    backgroundColor: COLORS.azulEscuro,
    borderRadius: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: COLORS.amarelo,
  },
  loading: { alignItems: "center", paddingVertical: 30, gap: 10 },
  loadingText: { fontFamily: FONT_PIXEL, fontSize: 14, color: COLORS.amareloClaro },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 8,
  },
  battleBtn: {
    marginTop: 14,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: COLORS.azulEscuro,
    borderBottomWidth: 6,
    alignItems: "center",
  },
  battleBtnText: {
    fontFamily: FONT_PIXEL,
    fontSize: 18,
    color: COLORS.amareloTexto,
    letterSpacing: 1,
  },
});
