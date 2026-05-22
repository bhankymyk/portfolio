<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0a0f1e;
  --surface: rgba(255,255,255,0.04);
  --border: rgba(255,255,255,0.08);
  --accent: #6c63ff;
  --teal: #00d4aa;
  --text: #f0f2ff;
  --muted: #8a9bb0;
  --card: rgba(255,255,255,0.05);
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }
</style>
