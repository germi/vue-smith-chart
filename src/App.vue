<template>
  <div
    class="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-200"
  >
    <!-- Header -->
    <header
      class="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 px-6 py-4"
    >
      <div class="mx-auto max-w-7xl flex items-center gap-3">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white"
        >
          SC
        </div>
        <h1 class="text-lg font-semibold tracking-tight">Vue Smith Chart</h1>
        <span
          class="ml-1 rounded-full bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-200 dark:ring-indigo-800"
          >Interactive</span
        >

        <!-- Dark mode toggle -->
        <button
          @click="toggleDark"
          class="ml-auto flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
            />
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          {{ isDark ? "Light" : "Dark" }}
        </button>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-8">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-start">
        <!-- Smith Chart -->
        <div class="flex-1 min-w-0">
          <div
            class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm dark:shadow-xl flex items-center"
          >
            <SmithChart
              :resistance-labels="false"
              :reactance-labels="false"
              :label-rings="false"
              :radius="300"
            >
              <SmResCircle
                v-for="(circle, i) in resCircles"
                :key="`res-${i}`"
                :res="circle.res"
                :crop="circle.crop"
                fill="rgba(99,102,241,0.15)"
                stroke-width="2"
                stroke="#6366f1"
              />
              <SmReactArc
                v-for="(arc, i) in reactArcs"
                :key="`rea-${i}`"
                :react="arc.react"
                :crop="arc.crop"
                fill="rgba(99,102,241,0.15)"
                stroke-width="2"
                stroke="#6366f1"
              />
              <SmVswrCircle
                v-for="(circle, i) in vswrCircles"
                :key="`vswr-${i}`"
                :res="circle.res"
                :react="circle.react"
                stroke-width="2"
                stroke="#f59e0b"
              />
              <SmPoint
                v-for="(point, i) in points"
                :key="`pt-${i}`"
                :res="point.res"
                :react="point.react"
                fill="#ef4444"
              />
            </SmithChart>
          </div>
        </div>

        <!-- Controls sidebar -->
        <div class="flex w-full flex-col gap-4 lg:w-80 lg:shrink-0">
          <!-- Impedance Points -->
          <section
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm"
          >
            <div
              class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 px-4 py-3"
            >
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-red-500"></span>
                <h2 class="text-sm font-semibold">Impedance Points</h2>
              </div>
              <button
                @click="points.push({ res: 1, react: 1 })"
                class="rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                + Add
              </button>
            </div>
            <ul class="divide-y divide-gray-100 dark:divide-gray-800">
              <li
                v-if="points.length === 0"
                class="px-4 py-3 text-xs text-gray-400 italic"
              >
                No points added.
              </li>
              <li
                v-for="(point, i) in points"
                :key="i"
                class="flex items-center gap-3 px-4 py-3"
              >
                <label
                  class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
                >
                  R
                  <input
                    v-model.number="point.res"
                    type="number"
                    class="w-16 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs text-gray-900 dark:text-gray-100 focus:border-indigo-400 focus:outline-none"
                  />
                </label>
                <label
                  class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
                >
                  X
                  <input
                    v-model.number="point.react"
                    type="number"
                    class="w-16 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs text-gray-900 dark:text-gray-100 focus:border-indigo-400 focus:outline-none"
                  />
                </label>
                <button
                  @click="points.splice(i, 1)"
                  class="ml-auto text-gray-300 dark:text-gray-600 hover:text-red-500 transition-colors text-xs"
                >
                  Remove
                </button>
              </li>
            </ul>
          </section>

          <!-- Constant Resistance Circles -->
          <section
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm"
          >
            <div
              class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 px-4 py-3"
            >
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-indigo-500"></span>
                <h2 class="text-sm font-semibold">Resistance Circles</h2>
              </div>
              <button
                @click="resCircles.push({ res: 1, crop: 0 })"
                class="rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                + Add
              </button>
            </div>
            <ul class="divide-y divide-gray-100 dark:divide-gray-800">
              <li
                v-if="resCircles.length === 0"
                class="px-4 py-3 text-xs text-gray-400 italic"
              >
                No circles added.
              </li>
              <li
                v-for="(circle, i) in resCircles"
                :key="i"
                class="flex items-center gap-3 px-4 py-3"
              >
                <label
                  class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
                >
                  Res
                  <input
                    v-model.number="circle.res"
                    type="number"
                    class="w-14 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs text-gray-900 dark:text-gray-100 focus:border-indigo-400 focus:outline-none"
                  />
                </label>
                <label
                  class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
                >
                  Crop
                  <input
                    v-model.number="circle.crop"
                    type="number"
                    class="w-14 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs text-gray-900 dark:text-gray-100 focus:border-indigo-400 focus:outline-none"
                  />
                </label>
                <button
                  @click="resCircles.splice(i, 1)"
                  class="ml-auto text-gray-300 dark:text-gray-600 hover:text-red-500 transition-colors text-xs"
                >
                  Remove
                </button>
              </li>
            </ul>
          </section>

          <!-- Constant Reactance Arcs -->
          <section
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm"
          >
            <div
              class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 px-4 py-3"
            >
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-indigo-500"></span>
                <h2 class="text-sm font-semibold">Reactance Arcs</h2>
              </div>
              <button
                @click="reactArcs.push({ react: 1, crop: '' })"
                class="rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                + Add
              </button>
            </div>
            <ul class="divide-y divide-gray-100 dark:divide-gray-800">
              <li
                v-if="reactArcs.length === 0"
                class="px-4 py-3 text-xs text-gray-400 italic"
              >
                No arcs added.
              </li>
              <li
                v-for="(arc, i) in reactArcs"
                :key="i"
                class="flex items-center gap-3 px-4 py-3"
              >
                <label
                  class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
                >
                  React
                  <input
                    v-model.number="arc.react"
                    type="number"
                    class="w-14 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs text-gray-900 dark:text-gray-100 focus:border-indigo-400 focus:outline-none"
                  />
                </label>
                <label
                  class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
                >
                  Crop
                  <input
                    v-model.number="arc.crop"
                    type="number"
                    class="w-14 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs text-gray-900 dark:text-gray-100 focus:border-indigo-400 focus:outline-none"
                  />
                </label>
                <button
                  @click="reactArcs.splice(i, 1)"
                  class="ml-auto text-gray-300 dark:text-gray-600 hover:text-red-500 transition-colors text-xs"
                >
                  Remove
                </button>
              </li>
            </ul>
          </section>

          <!-- Constant VSWR Circles -->
          <section
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm"
          >
            <div
              class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 px-4 py-3"
            >
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-amber-500"></span>
                <h2 class="text-sm font-semibold">VSWR Circles</h2>
              </div>
              <button
                @click="vswrCircles.push({ res: 1, react: 1 })"
                class="rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                + Add
              </button>
            </div>
            <ul class="divide-y divide-gray-100 dark:divide-gray-800">
              <li
                v-if="vswrCircles.length === 0"
                class="px-4 py-3 text-xs text-gray-400 italic"
              >
                No circles added.
              </li>
              <li
                v-for="(circle, i) in vswrCircles"
                :key="i"
                class="flex items-center gap-3 px-4 py-3"
              >
                <label
                  class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
                >
                  R
                  <input
                    v-model.number="circle.res"
                    type="number"
                    class="w-16 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs text-gray-900 dark:text-gray-100 focus:border-indigo-400 focus:outline-none"
                  />
                </label>
                <label
                  class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
                >
                  X
                  <input
                    v-model.number="circle.react"
                    type="number"
                    class="w-16 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs text-gray-900 dark:text-gray-100 focus:border-indigo-400 focus:outline-none"
                  />
                </label>
                <button
                  @click="vswrCircles.splice(i, 1)"
                  class="ml-auto text-gray-300 dark:text-gray-600 hover:text-red-500 transition-colors text-xs"
                >
                  Remove
                </button>
              </li>
            </ul>
          </section>

          <!-- Generated Code -->
          <section
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm"
          >
            <div
              class="border-b border-gray-100 dark:border-gray-800 px-4 py-3"
            >
              <h2 class="text-sm font-semibold">Generated Code</h2>
            </div>
            <pre
              class="overflow-x-auto px-4 py-3 text-xs leading-relaxed text-emerald-600 dark:text-emerald-400 font-mono bg-gray-50 dark:bg-gray-950"
            ><code>{{ generatedCode }}</code></pre>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import SmithChart from "./components/SmithChart.vue";
import SmPoint from "./components/SmPoint.vue";
import SmResCircle from "./components/SmResCircle.vue";
import SmReactArc from "./components/SmReactArc.vue";
import SmVswrCircle from "./components/SmVswrCircle.vue";

const points = ref([{ res: 1, react: 1 }]);
const resCircles = ref([{ res: 1, crop: 0 }]);
const reactArcs = ref([{ react: 1, crop: "" }]);
const vswrCircles = ref([{ res: 1, react: 1 }]);

const isDark = ref(false);

function applyDark(value) {
  document.documentElement.classList.toggle("dark", value);
}

function toggleDark() {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
  applyDark(isDark.value);
}

onMounted(() => {
  const stored = localStorage.getItem("theme");
  if (
    stored === "dark" ||
    (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark.value = true;
    applyDark(true);
  }
});

const generatedCode = computed(() => {
  let html = "<SmithChart>\n";
  for (const c of resCircles.value)
    html += `  <SmResCircle :res="${c.res}" :crop="${c.crop}" />\n`;
  for (const a of reactArcs.value)
    html += `  <SmReactArc :react="${a.react}" :crop="${a.crop}" />\n`;
  for (const c of vswrCircles.value)
    html += `  <SmVswrCircle :res="${c.res}" :react="${c.react}" />\n`;
  for (const p of points.value)
    html += `  <SmPoint :res="${p.res}" :react="${p.react}" />\n`;
  return html + "</SmithChart>";
});
</script>
