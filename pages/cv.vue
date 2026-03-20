<template>
  <section class="cv-page">
    <!-- HEADER -->
    <header class="cv-header">
      <h1>Acacia Williams</h1>

      <ul class="contact">
        <li>Montreal</li>

        <li>
          <a href="mailto:acacia_williams@hotmail.com">acacia_williams@hotmail.com</a>
        </li>

        <li class="portfolio">
          <strong>Portfolio:</strong>
          <a href="https://acaciawilliams.netlify.app" target="_blank" rel="noopener">
            acaciawilliams.netlify.app
          </a>
          <span class="meta">(built with Nuxt + TypeScript, deployed on Netlify)</span>
        </li>

        <li>
          <strong>GitHub:</strong>
          <a href="https://github.com/xaynia" target="_blank" rel="noopener">
            github.com/xaynia
          </a>
        </li>
      </ul>
    </header>

    <hr/>


    <!-- Personal Statement -->
    <h2>Personal Statement</h2>
    <p>
      I'm a cross-disciplinary builder who can take an idea from concept to a polished prototype and presentation. I create 3D assets in Blender, implement interactive systems in Unreal Engine or Unity, and produce real-time cinematics and trailers through capture and post-production in Premiere Pro and After Effects. My focus is designing readable, intentional experiences where mechanics, environment, and feedback work together. I combine hands-on prototyping with a psychology-informed design lens to build immersive, readable experiences through iteration.
    </p>

    <hr/>

    <!-- Education -->
    <h2>Education</h2>
    <div class="edu-degree">
      <span class="edu-degree-title">B.A. Psychology, Minor in Computational Arts</span>
      <span class="edu-degree-year">2026</span>
      <div class="edu-institution">Concordia University, Montreal, Quebec</div>
    </div>

    <ul>
      <li>
        <div class="edu-area-header">Computational Arts</div>
        <p class="edu-area-desc">Focused on game design, creative coding, generative art,
        and multimedia design.</p>
        <div class="edu-coursework">
          <span class="edu-coursework-label">Relevant coursework:</span>
          Real-Time 3D Environments, Game Studio, Game Design,
          3D Digital Production I &amp; II, Digital Game Prototyping, Digital Sound,
          Creative Computation I &amp; II, Visual Form &amp; Communication, Digital Media,
          Generative AI
        </div>

        <details class="edu-details">
          <summary class="edu-summary"><strong>All computation arts courses</strong></summary>
          <ul class="edu-detail-list">
            <li>
              <strong>Generative AI</strong> — Machine learning and creative AI toolchains
              <br/><span class="course-label">Software:</span> Hugging Face, Runway ML, ComfyUI, Adobe Firefly
              <br/><span class="course-label">Details:</span> ML fundamentals, transformers, diffusion models, prompt engineering, ethics and authorship
            </li>
            <li>
              <strong>Real-Time 3D Environments</strong> — World building and interactive environments
              <br/><span class="course-label">Software:</span> Blender 4.5, Unreal Engine 5.4/5.6, Mixamo, Substance Painter
              <br/><span class="course-label">Details:</span> Custom character creation, rigging, animation, Blueprint scripting, interactive systems, real-time environment lighting, rendering, Lumen, Niagara, FBX importing, character setup in Unreal, world building
              <br/><span class="course-label">Workflows:</span> Blender↔UE5 export/import pipeline, gameplay trailer (keyframes, camera, crane) → Premiere Pro editing
              <br/><span class="course-label">Projects:</span> <a href="/work/hide-and-seek"><em>Hide and Seek</em></a> (playable build + gameplay trailer + documentation)
            </li>
            <li>
              <strong>Game Studio</strong> — Experimental game design and rapid prototyping
              <br/><span class="course-label">Software:</span> Unity, Unreal Engine 5
              <br/><span class="course-label">Details:</span> Iterative development, peer playtesting, pitching, critique cycles, UI systems, scoring logic, player controls, HUD
              <br/><span class="course-label">Projects:</span> 2D Unity endless runner, <a href="/work/horse-jumper"><em>Horse Jumper Simulator</em></a> (UE5 — jump interactions, scoring logic, horse riding controls)
            </li>
            <li>
              <strong>3D Digital Production I</strong> — Foundational 3D modelling, animation, and rendering
              <br/><span class="course-label">Software:</span> Blender 4.5, Substance Painter
              <br/><span class="course-label">Details:</span> Low-poly and hard-surface modelling, vertex groups, modifiers, material shaders, UV unwrapping, PBR materials, texture painting, basic procedural texturing, basic lighting, HDRIs, cameras, Cycles and EEVEE rendering, keyframe animation, loops, curve paths, parenting, basic rigging, armatures, shape keys, compositing
              <br/><span class="course-label">Projects:</span> <a href="/work/blender">Technical model, conceptual transformation</a> exploring meaning through form
            </li>
            <li>
              <strong>3D Digital Production II</strong> — Procedural workflows, dynamics, and simulations
              <br/><span class="course-label">Software:</span> Blender 5.0/5.1
              <br/><span class="course-label">Details:</span> Geometry Nodes (procedural generation, volumes, morphs, instancing, scattering), physics simulations (particle systems, rigid body, cloth, soft body, fluid, simulation nodes, collisions/forces), hair/fur, intermediate shaders/materials, intermediate environment lighting/rendering, pinning/hooking cloth, inflating cloth, cloth shape keys, animated inflatables, rigged clothing
            </li>
            <li>
              <strong>Digital Game Prototyping</strong> — Rapid prototyping and iterative game development
              <br/><span class="course-label">Software:</span> Unity, C#, Pico-8/Lua, JetBrains Rider, GitHub
              <br/><span class="course-label">Details:</span> Singletons, OOP patterns, MDM framework journals, weekly iterative design cycles (ideation → prototyping → playtesting → refinement)
              <br/><span class="course-label">Projects:</span> <a href="/work/ghoul-rush"><em>Ghoul Rush</em></a> (3D horde-survival magic shooter), <a href="/work/ghost-tale">Pico-8 tiny game</a> (~24 hours)
            </li>
            <li>
              <strong>Game Design</strong> — Fundamental game design principles
              <br/><span class="course-label">Details:</span> Mechanics, industry texts, prototyping for digital expansions
              <br/><span class="course-label">Projects:</span> Board game prototype, card game prototype
            </li>
            <li>
              <strong>Creative Computation I &amp; II</strong> — Building interactive software with JavaScript
              <br/><span class="course-label">Software:</span> JavaScript, p5.js, HTML, CSS, Canvas, SVG
              <br/><span class="course-label">Details:</span> OOP, DOM manipulation, event listeners, JSON, nested loops, animation, hover detection, filter states, microphone/video input, media APIs, modular program architecture
              <br/><span class="course-label">Projects:</span> <a href="/work/gravity-jam"><em>Gravity Jam</em></a>, <a href="/work/chromatic-chameleon"><em>Chromatic Chameleon</em></a>
            </li>
            <li>
              <strong>Creative Computation / Network Culture</strong> — Web design and networked environments
              <br/><span class="course-label">Software:</span> HTML, CSS, JavaScript, GitHub
              <br/><span class="course-label">Details:</span> Creative coding, website creation, networked environments
            </li>
            <li>
              <strong>Visual Form &amp; Communication</strong> — Visual design principles across analog and digital
              <br/><span class="course-label">Software:</span> Adobe Illustrator, DSLR camera
              <br/><span class="course-label">Details:</span> Line, pattern, shape, texture, space, perspective, colour, typography, layout, composition
              <br/><span class="course-label">Projects:</span> Album cover design
            </li>
            <li>
              <strong>Digital Media Studio</strong> — Audiovisual production and sound-image integration
              <br/><span class="course-label">Software:</span> Premiere Pro, After Effects, Ableton, Reaper
              <br/><span class="course-label">Details:</span> Stop motion, green screen compositing, colour theory, audio reactivity, Premiere↔AE workflow, sound-image integration
              <br/><span class="course-label">Projects:</span> Movie trailer, <a href="/work/chaos-vs-symmetry"><em>Chaos vs. Symmetry</em></a> (experimental short blending AI elements with real-world footage)
            </li>
            <li>
              <strong>Digital Sound</strong> — Real-time digital audio synthesis, processing, and sound design
              <br/><span class="course-label">Software:</span> Max MSP, Jitter, RNBO, Unreal Engine 5 MetaSounds, Reaper, Ableton, Audacity, Pro Tools, Freesound
              <br/><span class="course-label">Details:</span> Digital representation of sound (time/frequency domain, file formats, data compression), audio recording and DAW editing, Max fundamentals (signals, logic, math, patches, subpatches, abstractions, encapsulation, variable/local arguments), sample playback and manipulation (looping, pitch shifting, time-compression/expansion), sound synthesis (additive, subtractive, FM, wavetable, granular), control signals (envelopes, LFOs), signal processing (time-based effects, delay lines, amplitude-based effects), sequencing, sound mixing, mastering. MetaSounds integration in UE5 (FM synth, sample playback, granular/wavetable synthesis, signal processing)
              <br/><span class="course-label">Capabilities:</span> Artificial soundscape creation (generative patches with procedural audio and logical conditions), sound/music sequencing machines (drum machines, sequencers, looping devices with randomness/indeterminacy), algorithmic generative audio programs (predefined logic, input parameters, direct audio source manipulation), self-directed sound art installations and live electronic performance
              <br/><span class="course-label">Projects:</span> Sample-based drum machine &amp; sequencer, Steve Reich phasing looper with live recording, custom interactive multi-sample instrument, <a href="/work/cymatic-water-symphony"><em>Cymatic Water Symphony</em></a> (Max MSP &amp; Jitter — six water-themed audio sources with cymatic-inspired visuals), RNBO Snake game
            </li>
            <li>
              <strong>New Media Theory</strong> — Technology, culture, and digital media
              <br/><span class="course-label">Details:</span> Theoretical frameworks of digital and interactive media — how technology shapes cultural expression (history, neural networks). GitHub foundations.
            </li>
          </ul>
        </details>
      </li>

      <li>
        <div class="edu-area-header">Psychology</div>
        <div class="edu-coursework">
          <span class="edu-coursework-label">Relevant coursework:</span>
          Cognition, Learning, Social Psychology, Research Methods,
          Personality, Statistical Analysis, Culture &amp; Development
        </div>

        <details class="edu-details">
          <summary class="edu-summary"><strong>All psychology courses</strong></summary>
          <ul class="edu-detail-list">
            <li>
              <strong>Cognition</strong> — Mental processes and information processing
              <br/><span class="course-label">Details:</span> Memory, attention, mental models.
            </li>
            <li>
              <strong>Learning</strong> — Behavioral adaptation and conditioning
              <br/><span class="course-label">Details:</span> Conditioning, reinforcement, adaptation in interactive systems.
            </li>
            <li>
              <strong>Social Psychology</strong> — Group dynamics and social influence
              <br/><span class="course-label">Details:</span> Social norms, group decision making.
            </li>
            <li>
              <strong>Research Methods &amp; Designs</strong> — Experimental psychology methodology
              <br/><span class="course-label">Details:</span> Experimental design, ethics, APA style, proposal writing.
            </li>
            <li>
              <strong>Personality</strong> — Theories of individual differences
              <br/><span class="course-label">Details:</span> Personality theories and application to behavior/character.
            </li>
            <li>
              <strong>Statistical Analysis</strong> — Quantitative methods in psychology
              <br/><span class="course-label">Software:</span> Excel
              <br/><span class="course-label">Details:</span> Descriptive/inferential stats, distributions, z-scores, significance tests, power analysis, effect size, confidence intervals, t-distributions, correlation and regression, p-hacking.
            </li>
            <li>
              <strong>Culture, Development &amp; The Self</strong> — Identity in cultural context
              <br/><span class="course-label">Details:</span> Cultural contexts of identity and development.
            </li>
            <li>
              <strong>Behavioral Neurobiology</strong> — Neural bases of behavior
              <br/><span class="course-label">Details:</span> Neuron structure and function, neurotransmission, neuroanatomy, sensory systems, and motivation/reward circuitry.
            </li>
            <li>
              <strong>Psychopathology</strong> — Psychological disorders and classification
              <br/><span class="course-label">Details:</span> DSM-5 classification, symptomatology, etiology, and treatment of psychological disorders.
            </li>
            <li>
              <strong>Psychopathology: Schizophrenia &amp; Neurocognitive Disorders</strong> — Advanced clinical neuropsychology
              <br/><span class="course-label">Details:</span> Schizophrenia spectrum and neurocognitive conditions — neuroimaging, brain structure/function analysis, symptomatology, and diagnostic approaches.
            </li>
            <li>
              <strong>Health Psychology</strong> — Psychosocial factors in health and illness
              <br/><span class="course-label">Details:</span> Biopsychosocial model, health behavior models, stress physiology, personality and health, social support, smoking, obesity, cardiovascular disease, cancer, and pain.
            </li>
            <li>
              <strong>Current Issues in Health Psychology</strong> — Clinical health psychology
              <br/><span class="course-label">Details:</span> Psychophysiology, pain management, health anxiety, chronic disease adjustment, and pediatric health populations.
            </li>
            <li>
              <strong>Lifespan Development</strong> — Developmental psychology across the lifespan
              <br/><span class="course-label">Details:</span> Physical, cognitive, and psychosocial development from conception to death.
            </li>
            <li>
              <strong>Infancy</strong> — Early cognitive and perceptual development
              <br/><span class="course-label">Details:</span> Infant development and underlying mechanisms, research methods in infant studies, and evaluating debates around infant care.
            </li>
            <li>
              <strong>Forensic Psychology</strong> — Psychology in legal contexts
              <br/><span class="course-label">Details:</span> Psychological principles applied to legal and criminal contexts.
            </li>
            <li>
              <strong>Hypnosis &amp; Dissociation</strong> — Altered states of consciousness
              <br/><span class="course-label">Details:</span> Altered states and dissociative phenomena.
            </li>
            <li>
              <strong>Adolescent Behavior</strong> — Youth development and risk
              <br/><span class="course-label">Details:</span> Risk factors, behavioral patterns, and developmental influences in youth.
            </li>
            <li>
              <strong>History &amp; Systems</strong> — Evolution of psychological thought
              <br/><span class="course-label">Details:</span> Foundations and evolution of psychological theory.
            </li>
            <li>
              <strong>Stress, Health &amp; Coping</strong> — Stress responses and resilience
              <br/><span class="course-label">Details:</span> Psychological responses to stress and coping strategies.
            </li>
            <li>
              <strong>Introductory Psychology</strong> — Foundations of modern psychology
              <br/><span class="course-label">Details:</span> Neural mechanisms, learning, memory, sensation, perception, motivation, emotion, cognition, social influences, personality, and disorders.
            </li>
          </ul>
        </details>
      </li>
    </ul>

    <hr/>

    <!-- Projects -->
    <h2>Selected Projects</h2>
    <p>Recent work — see portfolio for full details and demos.</p>

    <ul class="project-list">
      <!-- Hide and Seek -->
      <li>
        <a href="https://acaciawilliams.netlify.app/work/hide-and-seek" target="_blank" rel="noopener">
          <strong>Hide and Seek (Sky Museum)</strong>
        </a> — Solo real-time cinematic 3D environment
        <br/><span class="course-label">Tools:</span> Unreal Engine 5.6, Blender, Premiere Pro, After Effects
        <br/><span class="course-label">Role:</span> Solo — environment design, asset creation, Blueprint scripting, trailer production
        <br/><span class="course-label">Details:</span> Built a playable 3D environment using Sequencer, Blueprints, and Movie Render Queue with a Blender asset pipeline; created a non-Euclidean cube presentation effect; edited the gameplay trailer in Premiere/After Effects
      </li>
      <!-- Ouroboros Loop -->
      <li>
        <a href="https://acaciawilliams.netlify.app/work/ouroboros-loop" target="_blank" rel="noopener">
          <strong>Ouroboros Loop — iAcorn: Scheduled Growth</strong>
        </a> — Looping 3D animation with procedural transitions
        <br/><span class="course-label">Tools:</span> Blender (Shader Nodes, Geometry Nodes, Video Sequencer)
        <br/><span class="course-label">Role:</span> Solo — concept, modelling, shader development, animation, compositing
        <br/><span class="course-label">Details:</span> 15–20s looping animation where a hydration UI drives an acorn → oak → reset cycle; shader-node material transitions, Geometry Nodes foliage replacement, and Video Sequencer iteration
      </li>
      <!-- Horse Jumper Simulator -->
      <li>
        <a href="/work/horse-jumper" target="_blank" rel="noopener">
          <strong>Horse Jumper Simulator</strong>
        </a> — 3D show-jumping game prototype
        <br/><span class="course-label">Tools:</span> Unreal Engine 5.6, Blueprints
        <br/><span class="course-label">Role:</span> Solo — game design, player controls, scoring system, UI/HUD
        <br/><span class="course-label">Details:</span> Built a playable 3D show-jumping prototype with timed jump courses, fault tracking, horse riding controls, and a scoring system
      </li>
      <!-- Ghoul Rush -->
      <li>
        <a href="https://acaciawilliams.netlify.app/work/ghoul-rush" target="_blank" rel="noopener">
          <strong>Ghoul Rush</strong>
        </a> — 3D horde-survival magic shooter
        <span class="proj-links">
          <span class="sep">·</span>
          <a href="https://github.com/Noe235/CART315FinalProject" target="_blank" rel="noopener">Source code</a>
        </span>
        <br/><span class="course-label">Tools:</span> Unity, C#, JetBrains Rider, GitHub
        <br/><span class="course-label">Role:</span> Team (2) — gameplay programming, spell system, enemy AI, playtesting
        <br/><span class="course-label">Details:</span> Fast-paced horde-survival shooter where players collect elemental mushrooms and swap spells to defend a magical core; iterative design through weekly playtesting cycles
      </li>
      <!-- Cymatic Water Symphony -->
      <li>
        <a href="/work/cymatic-water-symphony" target="_blank" rel="noopener">
          <strong>Cymatic Water Symphony</strong>
        </a> — Audio-visual installation
        <br/><span class="course-label">Tools:</span> Max MSP, Jitter
        <br/><span class="course-label">Role:</span> Solo — sound design, visual programming, installation design
        <br/><span class="course-label">Details:</span> Interactive patch combining six water-themed audio sources with cymatic-inspired visuals, showcasing how sound vibrations produce distinct patterns in physical media
      </li>
    </ul>

    <details class="edu-details">
      <summary class="edu-summary"><strong>Other projects</strong></summary>
      <ul class="edu-detail-list">
        <li>
          <a href="/work/blender" target="_blank" rel="noopener">
            <strong>Blender 3D Modeling — Surface Tensions</strong>
          </a> — Technical and conceptual 3D modelling
          <br/><span class="course-label">Tools:</span> Blender, Substance Painter
          <br/><span class="course-label">Role:</span> Solo — modelling, materials, lighting, rendering
          <br/><span class="course-label">Details:</span> Two 3D models: one technically accurate everyday object, and one conceptual transformation (hourglass) using modifiers and visual metaphor
        </li>
        <li>
          <a href="/work/capstone" target="_blank" rel="noopener">
            <strong>ECG &amp; Gaming Capstone</strong>
          </a> — Psychophysiology research project
          <br/><span class="course-label">Tools:</span> ECG equipment, Excel, statistical analysis
          <br/><span class="course-label">Role:</span> Solo — research design, data collection, analysis, write-up
          <br/><span class="course-label">Details:</span> Measured psychophysiological signals (heart rate, ECG) while participants played various game genres (social simulation, fighting, platformer), analyzing stress and emotional responses
        </li>
      </ul>
    </details>
    <hr/>

    <!-- Technical Skills -->
    <h2>Technical Skills</h2>

    <ul class="skills-list">
      <li><strong>Programming:</strong> C# (Unity, OOP), JavaScript/TypeScript, HTML/CSS, Lua (PICO-8), Python</li>

      <li>
        <strong>Game / Real-Time:</strong>
        Unity; Unreal Engine 5 (Blueprints/Event Graphs, Animation Blueprints, Blend Spaces, character setup, input/controls,
        UI Widgets/UMG, post-processing, Sequencer, Movie Render Queue, packaged builds)
      </li>

      <li>
        <strong>3D:</strong>
        Blender (modeling, sculpting/character creation, UV mapping, materials/shaders, lighting, animation, rigging, weight painting,
        particle systems, Geometry Nodes/procedural workflows, dynamics &amp; simulations, rendering, Video Sequencer)
      </li>

      <li><strong>Texturing:</strong> Substance Painter; PBR workflows (albedo/base color, normal, roughness, metallic, AO, packed maps)</li>

      <li><strong>Creative Coding:</strong> Phaser.js, p5.js, Canvas, SVG, JSON, Web/media APIs</li>

      <li><strong>Web / Deployment:</strong> Nuxt (Vue.js, TypeScript, SCSS), Netlify, Unity WebGL exports, Itch.io publishing</li>

      <li><strong>Media:</strong> Premiere Pro, After Effects, Photoshop, Illustrator, Media Encoder</li>

      <li><strong>Audio:</strong> Max MSP (RNBO, Jitter)</li>

      <li><strong>Tools / IDEs:</strong> Rider, WebStorm, PyCharm, Visual Studio Code, GitHub Desktop</li>

      <li><strong>Version Control:</strong> Git, GitHub</li>

      <li><strong>Data / Research:</strong> Excel (stats/data analysis), MUSE Headband/App (basic EEG workflows)</li>

      <li><strong>Workflow:</strong> iterative prototyping/playtesting, process documentation (design journals, project write-ups), critique-driven iteration</li>
    </ul>

    <details class="skills-details">
      <summary class="skills-summary">
        <strong>More detail (pipelines + Generative AI tooling)</strong>
      </summary>

      <ul class="skills-detail-list">
        <li>
          <strong>3D pipeline:</strong>
          FBX export/import Blender ↔ Unreal (meshes, UVs, texture maps incl. packed maps, rigs/animations);
          manual rigging + weight painting; Mixamo auto-rig/animation integration
        </li>

        <li>
          <strong>Character pipeline:</strong>
          sculpt/character creation in Blender → rigging + weight painting → export (FBX) → Unreal import →
          1st/3rd-person setup, animation integration, blended animations, controls, Blueprint logic
        </li>

        <li>
          <strong>Rendering / deliverables:</strong>
          Blender renders + Video Sequencer iteration; Unreal Sequencer + MRQ renders and/or packaged builds → edit/composite in
          Premiere Pro + After Effects
        </li>

        <li>
          <strong>Generative AI:</strong>
          OpenAI API, Google Colab prototyping, Hugging Face, Runway ML, Pinokio, ComfyUI, Adobe Firefly;
          prompt iteration/evaluation, dataset curation, parameter tuning/fine-tuning, transformers + diffusion models
        </li>
      </ul>
    </details>

    <hr/>

  </section>
</template>

<script setup>
// Custom Components
</script>

<style scoped>
/* ── CV accent + link colors ── */
.cv-page {
  --cv-accent: #2ab5a0;
  --cv-accent-hover: #23a08d;
  --cv-link: #2ab5a0;
  --cv-link-visited: #2ab5a0;
}

@media (prefers-color-scheme: dark) {
  .cv-page {
    --cv-accent: #4dd9c0;
    --cv-accent-hover: #6de4d0;
    --cv-link: #4dd9c0;
    --cv-link-visited: #4dd9c0;
  }
}

.dark .cv-page {
  --cv-accent: #4dd9c0;
  --cv-accent-hover: #6de4d0;
  --cv-link: #4dd9c0;
  --cv-link-visited: #4dd9c0;
}

.cv-page a {
  color: var(--cv-link);
  transition: color 0.15s ease;
}

.cv-page a:visited {
  color: var(--cv-link-visited);
}

.cv-page a:hover {
  color: var(--cv-accent-hover);
}

/* ── Page container ── */
.cv-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2.25rem 3.5rem;
  background: var(--card);
  border-radius: 14px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(128, 128, 128, 0.06);
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 700px) {
  .cv-page {
    margin: 0.75rem auto 2rem;
    padding: 1.75rem 1.25rem 2.5rem;
    border-radius: 10px;
  }
}

/* ── Header ── */
.cv-header {
  margin-bottom: 0.75rem;
}

.cv-page h1 {
  margin-bottom: 0.6rem;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.cv-page ul.contact {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  row-gap: 0.3rem;
  line-height: 1.4;
  font-size: 0.9rem;
}

.cv-page ul.contact li {
  margin: 0;
  margin-bottom: 0;
}

.cv-page ul.contact li:not(:last-child)::after {
  content: "·";
  opacity: 0.4;
  margin: 0 0.65rem;
  font-weight: 700;
}

.cv-page ul.contact .meta {
  opacity: 0.55;
  font-size: 0.88em;
  margin-left: 0.3rem;
}

.cv-page ul.contact a {
  text-decoration: none;
  color: var(--cv-accent);
  transition: opacity 0.15s ease;
}

.cv-page ul.contact a:hover {
  text-decoration: underline;
  opacity: 0.85;
}

/* ── Section headings ── */
.cv-page h2 {
  margin-top: 2.25rem;
  margin-bottom: 0.6rem;
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--cv-accent);
}

/* ── Dividers ── */
.cv-page hr {
  margin: 1.75rem 0;
  border: none;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(128, 128, 128, 0.25) 15%,
    rgba(128, 128, 128, 0.25) 85%,
    transparent
  );
}

/* ── Body text ── */
.cv-page p,
.cv-page li {
  margin-bottom: 0.85rem;
}

.cv-page ul,
.cv-page ol {
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
}

/* ── Education highlight ── */
.edu-degree {
  margin-bottom: 1.5rem;
}

.edu-degree-title {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.edu-degree-year {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.55rem;
  border-radius: 4px;
  background: rgba(42, 181, 160, 0.12);
  color: var(--cv-accent);
  vertical-align: middle;
  position: relative;
  top: -1px;
}

.edu-institution {
  margin-top: 0.3rem;
  font-size: 0.92rem;
  opacity: 0.7;
  letter-spacing: 0.01em;
}

.edu-area-header {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--cv-accent);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
}

.edu-area-desc {
  margin: 0.25rem 0 0.5rem;
  opacity: 0.8;
  font-size: 0.92rem;
}

.edu-coursework {
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 0.5rem;
}

.edu-coursework-label {
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.55;
  margin-right: 0.3em;
}

/* ── Course detail labels ── */
.course-label {
  font-size: 0.7em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
  margin-right: 0.35em;
}

/* ── Project entries ── */
.project-list {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}

.project-list li {
  padding: 1rem 1.1rem;
  margin-bottom: 0.75rem;
  background: var(--bg);
  border-radius: 8px;
  border-left: 3px solid var(--cv-accent);
  transition: box-shadow 0.2s ease;
}

.project-list li:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
}

.proj-links {
  display: inline;
  font-size: 0.88em;
  opacity: 0.7;
}

.proj-links .sep {
  opacity: 0.4;
  margin: 0 0.3rem;
}

/* ── Skills list ── */
.skills-list {
  margin-left: 1.5rem;
}

.skills-list li {
  padding-left: 0.25rem;
}

/* ── Shared dropdown styling ── */
.skills-details,
.edu-details {
  margin-top: 1rem;
  background: var(--bg);
  border-radius: 10px;
  border-left: 3px solid var(--cv-accent);
  padding: 0.5rem 0.85rem;
  transition: box-shadow 0.25s ease;
}

.skills-details:hover,
.edu-details:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
}

.skills-summary,
.edu-summary {
  cursor: pointer;
  padding: 0.6rem 0.5rem;
  border-radius: 6px;
  list-style: none;
  user-select: none;
  font-size: 0.88rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: background 0.15s ease;
}

.skills-summary:hover,
.edu-summary:hover {
  background: rgba(95, 162, 255, 0.08);
}

.skills-summary::-webkit-details-marker,
.edu-summary::-webkit-details-marker {
  display: none;
}

.skills-summary::before,
.edu-summary::before {
  content: "▸";
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.2s ease;
  color: var(--cv-accent);
}

.skills-details[open] .skills-summary::before,
.edu-details[open] .edu-summary::before {
  transform: rotate(90deg);
}

.skills-details[open] .skills-summary,
.edu-details[open] .edu-summary {
  margin-bottom: 0.35rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.12);
  padding-bottom: 0.65rem;
}

.skills-summary:focus-visible,
.edu-summary:focus-visible {
  outline: 2px solid var(--cv-accent);
  outline-offset: 2px;
}

.skills-detail-list,
.edu-detail-list {
  margin: 0.75rem 0 0.25rem;
  padding-left: 1.25rem;
}

.edu-detail-list li {
  margin-bottom: 0.9rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.08);
}

.edu-detail-list li:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>