import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Jersey10_400Regular, useFonts } from "@expo-google-fonts/jersey-10";
import { GEN_RANGES } from "../../Utils/constants";
import { fetchGenCatalog, searchPokemon } from "../../Data/api";
import { PokemonLite } from "../../Types/pokemon";
import { useTeam } from "../../Context/TeamContext";
import TeamSlots from "../../Components/TeamSlots";
import PokemonGrid from "../../Components/PokemonGrid";
import { ThemeToggle } from "../../Components/ThemeToggle";
import { styles } from "./styles";

export default function Teams() {
  const navigation = useNavigation<any>();
  const { team, addToTeam, removeFromTeam } = useTeam();
  const [fontsLoaded] = useFonts({ Jersey10_400Regular });

  const [catalog, setCatalog] = useState<PokemonLite[]>([]);
  const [loadingCat, setLoadingCat] = useState(false);
  const [genIdx, setGenIdx] = useState(0);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<PokemonLite | null>(null);
  const [searching, setSearching] = useState(false);

  const loadGen = useCallback(async (idx: number) => {
    const { start, end } = GEN_RANGES[idx];
    setLoadingCat(true);
    setSearchResult(null);
    setSearch("");
    try {
      const data = await fetchGenCatalog(start, end);
      setCatalog(data);
    } catch {
      setCatalog([]);
    }
    setLoadingCat(false);
  }, []);

  useEffect(() => {
    loadGen(0);
  }, [loadGen]);

  const handleGenChange = (i: number) => {
    setGenIdx(i);
    loadGen(i);
  };

  const doSearch = async () => {
    const q = search.trim().toLowerCase();
    if (!q) return;
    setSearching(true);
    try {
      const result = await searchPokemon(q);
      setSearchResult(result);
    } catch {
      setSearchResult(null);
    }
    setSearching(false);
  };

  const clearSearch = () => {
    setSearchResult(null);
    setSearch("");
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <ThemeToggle />
      </View>
      <TeamSlots team={team} removeFromTeam={removeFromTeam} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <PokemonGrid
          catalog={catalog}
          loadingCat={loadingCat}
          team={team}
          genIdx={genIdx}
          search={search}
          searchResult={searchResult}
          searching={searching}
          onAdd={addToTeam}
          onSearch={doSearch}
          onSearchChange={setSearch}
          onClearSearch={clearSearch}
          onGenChange={handleGenChange}
          onGoToBattle={() => navigation.navigate("battles")}
        />
      </ScrollView>
    </View>
  );
}
