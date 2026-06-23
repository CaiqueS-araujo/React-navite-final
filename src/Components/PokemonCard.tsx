import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONT_PIXEL } from "../Themes/gameTheme";
import { TYPE_COLORS } from "../Utils/constants";
import { spriteFront } from "../Utils/sprites";
import { PokemonLite } from "../Types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonLite;
  inTeam: boolean;
  teamFull: boolean;
  onAdd: (p: PokemonLite) => void;
}

export default function PokemonCard({ pokemon, inTeam, teamFull, onAdd }: PokemonCardProps) {
  const disabled = inTeam || teamFull;

  const gradient: [string, string] = inTeam
    ? ["rgba(235,217,55,0.22)", "rgba(235,217,55,0.08)"]
    : ["rgba(61,110,184,0.45)", "rgba(25,34,46,0.55)"];

  return (
    <Pressable
      onPress={() => !disabled && onAdd(pokemon)}
      disabled={disabled}
      style={({ pressed }) => [
        styles.touchable,
        { opacity: teamFull && !inTeam ? 0.45 : pressed && !disabled ? 0.8 : 1 },
      ]}
    >
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.card,
          { borderColor: inTeam ? COLORS.amarelo : "rgba(255,255,255,0.12)" },
        ]}
      >
        {inTeam && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>TIME</Text>
          </View>
        )}

        <Image source={{ uri: spriteFront(pokemon.id) }} style={styles.sprite} />

        <Text
          style={[styles.name, { color: inTeam ? COLORS.amarelo : COLORS.branco }]}
          numberOfLines={1}
        >
          {pokemon.name}
        </Text>
        <Text style={styles.number}>#{String(pokemon.id).padStart(3, "0")}</Text>

        <View style={styles.types}>
          {pokemon.types.map((t) => (
            <View
              key={t}
              style={[styles.typeTag, { backgroundColor: TYPE_COLORS[t] || "#666" }]}
            >
              <Text style={styles.typeText}>{t}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  touchable: { width: "31.5%" },
  card: {
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 6,
    paddingVertical: 8,
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: 3,
    left: 3,
    backgroundColor: COLORS.amarelo,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
    zIndex: 2,
  },
  badgeText: { fontFamily: FONT_PIXEL, fontSize: 5, color: COLORS.amareloTexto },
  sprite: { width: 62, height: 62 },
  name: {
    fontFamily: FONT_PIXEL,
    fontSize: 6,
    textTransform: "uppercase",
    marginTop: 4,
    textAlign: "center",
  },
  number: {
    fontFamily: FONT_PIXEL,
    fontSize: 5,
    color: "rgba(255,255,255,0.35)",
    marginBottom: 5,
    marginTop: 2,
  },
  types: { flexDirection: "row", flexWrap: "wrap", gap: 3, justifyContent: "center" },
  typeTag: { paddingHorizontal: 5, paddingVertical: 2, borderRadius: 3 },
  typeText: {
    fontFamily: FONT_PIXEL,
    fontSize: 5,
    color: COLORS.branco,
    textTransform: "uppercase",
  },
});
