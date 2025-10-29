---
layout: ../../layouts/ProjectLayout.astro
title: "openWheels"
description: "An open-source deobfuscation and reimplementation of the Happy Wheels TypeScript port"
cover: "/projects/openwheels/bg.png"
video: "https://www.goodboydigital.com/content/uploads/HappyWheels-CaseStudy.mp4"
tags: ["game dev", "pixi.js", "typescript", "reverse engineering"]
repo: "https://github.com/jargdev/openWheels"
link: "https://jarg.wtf/openWheels/"
---

<div class="space-y-8">

  <section>
    <h2 class="text-2xl font-bold text-[#ff6200] mb-4">Overview</h2>
    <p class="text-base text-gray-800">
      <strong>openWheels</strong> is an open-source project aimed at <strong>deobfuscating and reimplementing</strong> the <em>Happy Wheels</em> TypeScript port by GoodBoy Digital.
      The project is a collaboration between <a href="https://github.com/jargdev" class="text-[#ff6200] hover:underline">jargdev</a> and <a href="https://nassinger.com" class="text-[#ff6200] hover:underline">Nassinger</a>.
      It focuses on understanding, documenting, and rebuilding the game's internal systems.
    </p>
  </section>

  <section>
    <h2 class="text-2xl font-bold text-[#ff6200] mb-4">Highlights</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-800">
      <li>Multiple deobfuscation techniques</li>
      <li>Reimplementation of server endpoints</li>
      <li>Reverse engineering of systems</li>
    </ul>
  </section>

  <section>
    <h2 class="text-2xl font-bold text-[#ff6200] mb-4">Development Notes</h2>
    <p class="text-gray-800 mb-2">
      This project started as a <strong>personal challenge</strong> to recover and study the obfuscated Happy Wheels TypeScript code. 
      While a full deobfuscation hasn't been achieved, substantial progress has been made toward understanding the codebase and documenting its systems.
    </p>
    <p class="text-gray-800">
      <strong>Nassinger</strong> is currently leading a <strong>ground-up remake</strong> of Happy Wheels, using openWheels as a reference for systems and gameplay behavior.
    </p>
  </section>

  <section>
    <h2 class="text-2xl font-bold text-[#ff6200] mb-4">Technical Overview</h2>
    <table class="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
      <tr class="bg-[#fff4ee]">
        <th class="px-4 py-2 text-[#ff6200]">Component</th>
        <th class="px-4 py-2 text-[#ff6200]">Description</th>
      </tr>
      <tr class="border-t border-gray-200">
        <td class="px-4 py-2 font-medium">Language</td>
        <td class="px-4 py-2">JavaScript</td>
      </tr>
      <tr class="border-t border-gray-200 bg-gray-50">
        <td class="px-4 py-2 font-medium">Renderer</td>
        <td class="px-4 py-2">pixi.js</td>
      </tr>
      <tr class="border-t border-gray-200">
        <td class="px-4 py-2 font-medium">Build Tools</td>
        <td class="px-4 py-2">Bun / Node</td>
      </tr>
      <tr class="border-t border-gray-200 bg-gray-50">
        <td class="px-4 py-2 font-medium">Focus</td>
        <td class="px-4 py-2">Deobfuscation, code analysis, and reimplementation</td>
      </tr>
    </table>
  </section>

  <section>
    <h2 class="text-2xl font-bold text-[#ff6200] mb-4">Project Status</h2>
    <p class="text-gray-800">
      New contributors are welcome to assist with testing, analysis, or documentation. While it may not be done yet, you can join the Happy Wheels Reverse Engineering discord to help with it.
    </p>
  </section>

  <section>
    <h2 class="text-2xl font-bold text-[#ff6200] mb-4">License</h2>
    <p class="text-gray-800">
      See the <a href="https://github.com/jargdev/openWheels" class="text-[#ff6200] hover:underline">repository</a> for license and contribution details.  
      The project is intended for <strong>educational and research purposes</strong> and respects the original IP of Happy Wheels and its creators.
    </p>
  </section>

</div>
