// Setup global pour les tests
// Mock import.meta pour éviter les erreurs de compilation
Object.defineProperty(global, "import", {
  value: {
    meta: {
      url: "file:///fake/path",
    },
  },
});
