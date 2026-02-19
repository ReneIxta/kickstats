import { useEffect } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { initDatabase } from "./src/storage/database";

export default function App() {
  useEffect(() => {
    initDatabase();
  }, []);

  return <AppNavigator />;
}
