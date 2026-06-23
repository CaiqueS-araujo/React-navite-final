import React from "react";
import { View, Text, Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONT_PIXEL } from "../Themes/gameTheme";
import { MAX_TEAM } from "../Utils/constants";
import { spriteFront } from "../Utils/sprites";
import { PokemonLite } from "../Types/pokemon";

interface TeamSlotsProps {
  team: PokemonLite[];
  removeFromTeam: (id: number) => void;
}

export default function TeamSlots({ team, removeFromTeam }: TeamSlotsProps) {
  return (
    <View style={styles.bar}>
      <Text style={styles.title}>SEU TIME</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {Array.from({ length: MAX_TEAM }).map((_, i) => {
          const p = team[i];
          if (!p) {
            return (
              <View key={i} style={[styles.slot, styles.slotEmpty]}>
                <Text style={styles.plus}>+</Text>
              </View>
            );
          }
          return (
            <LinearGradient
              key={i}
              colors={[COLORS.azul, COLORS.azulEscuro]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.slot, styles.slotFilled]}
            >
              <Image source={{ uri: spriteFront(p.id) }} style={styles.sprite} />
              <Pressable
                onPress={() => removeFromTeam(p.id)}
                style={styles.removeBtn}
                hitSlop={6}
                accessibilityLabel={`Remover ${p.name} do time`}
              >
                <Text style={styles.removeText}>✕</Text>
              </Pressable>
              <View style={styles.nameBar}>
                <Text style={styles.name} numberOfLines={1}>
                  {p.name}
                </Text>
              </View>
            </LinearGradient>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: COLORS.amarelo,
    borderBottomWidth: 4,
    borderBottomColor: COLORS.azulEscuro,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  title: {
    fontFamily: FONT_PIXEL,
    fontSize: 7,
    color: COLORS.amareloTexto,
    marginBottom: 6,
    letterSpacing: 1,
  },
  row: { gap: 5, paddingBottom: 2 },
  slot: {
    width: 64,
    height: 64,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 3,
  },
  slotEmpty: {
    backgroundColor: "rgba(29,44,94,0.15)",
    borderColor: "rgba(29,44,94,0.3)",
  },
  slotFilled: { borderColor: COLORS.azulEscuro },
  plus: { fontSize: 18, color: "rgba(29,44,94,0.4)" },
  sprite: { width: 48, height: 48 },
  removeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: COLORS.vermelhoForte,
    width: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 4,
  },
  removeText: { color: COLORS.branco, fontSize: 8, lineHeight: 10 },
  nameBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.65)",
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  name: {
    fontFamily: FONT_PIXEL,
    fontSize: 5,
    color: COLORS.amarelo,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
