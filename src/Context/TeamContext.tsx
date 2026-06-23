import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PokemonLite } from "../Types/pokemon";
import { MAX_TEAM } from "../Utils/constants";

const STORAGE_KEY = "@apppokemon:team";

interface TeamContextData {
  team: PokemonLite[];
  loaded: boolean;
  isInTeam: (id: number) => boolean;
  isFull: boolean;
  addToTeam: (p: PokemonLite) => void;
  removeFromTeam: (id: number) => void;
  clearTeam: () => void;
}

const TeamContext = createContext<TeamContextData>({} as TeamContextData);

export function TeamProvider({ children }: { children: ReactNode }) {
  const [team, setTeam] = useState<PokemonLite[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) setTeam(JSON.parse(raw));
      } catch (e) {
        console.log("Erro ao ler o time salvo:", e);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(team)).catch((e) =>
      console.log("Erro ao salvar o time:", e),
    );
  }, [team, loaded]);

  const isInTeam = useCallback(
    (id: number) => team.some((p) => p.id === id),
    [team],
  );

  const addToTeam = useCallback((p: PokemonLite) => {
    setTeam((prev) => {
      if (prev.some((x) => x.id === p.id) || prev.length >= MAX_TEAM) return prev;
      return [...prev, p];
    });
  }, []);

  const removeFromTeam = useCallback((id: number) => {
    setTeam((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const clearTeam = useCallback(() => setTeam([]), []);

  return (
    <TeamContext.Provider
      value={{
        team,
        loaded,
        isInTeam,
        isFull: team.length >= MAX_TEAM,
        addToTeam,
        removeFromTeam,
        clearTeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  return useContext(TeamContext);
}
