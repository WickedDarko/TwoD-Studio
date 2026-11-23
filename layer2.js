// =========================================================================
// TwoD Studio — Layer 2 (Learn More) & Sub-Plane 2B (Windows Build)
// - Live GitHub Releases sync (What's New)
// - Live GitHub Discussions sync from ./discussions.json (zero fake placeholders)
// - Windows Build sub-plane with easy-to-edit WINDOWS_CARDS array
// =========================================================================
(function () {
  const OWNER = 'WickedDarko';
  const REPO = 'TwoD-Studio';

  // Editable Windows Sub-Plane Cards (swap in real specs, screenshots & dates as you announce them)
  const WINDOWS_CARDS = [
    {
      id: 'win-keyboard',
      moduleKey: 'win_keyboard',
      tagLeft: 'Workflow',
      tagRight: 'Desktop',
      title: 'Keyboard & Shortcut Flow',
      blurb: 'Fast hotkeys for tool switching, bone selection, timeline scrubbing, and playback built around a full desktop keyboard.',
      cueLeft: 'Planned capability',
      cueRight: 'Details ↗',
      sheetLead: 'Designed around keyboard speed so animators can stay on the stage instead of hunting through menus.',
      details: [
        ['Tool & Mode Hotkeys', 'Instant switching between Select (V), Universal Gizmo (T), FK/IK, Draw, and playback transport.'],
        ['Timeline & Frame Stepping', 'Nudge keyframes, step frame-by-frame, and toggle onion skinning directly from the keyboard.'],
        ['Undo / Redo Routing', 'Context-aware Ctrl+Z / Ctrl+Shift+Z across the Stage, 2.5D Mesh Studio, and Sprite Paint Studio.'],
        ['Custom Remapping', 'Adapt bindings to match your muscle memory from other desktop animation suites.']
      ]
    },
    {
      id: 'win-input',
      moduleKey: 'win_input',
      tagLeft: 'Input',
      tagRight: 'Precision',
      title: 'Mouse & Pen-Tablet Control',
      blurb: 'Tuned for mouse, trackpad, and pen-tablet workflows—from Contour Fit mesh sculpting to direct cel drawing.',
      cueLeft: 'Desktop input',
      cueRight: 'Details ↗',
      sheetLead: 'Bringing the touch-first engine to wide desktop displays with cursor-anchored navigation and stylus precision.',
      details: [
        ['Cursor-Anchored Zoom & Pan', 'Smooth scroll-wheel zooming toward the cursor with Spacebar or Middle-Mouse canvas panning.'],
        ['2.5D Mesh Sculpting', 'Fine vertex nudging, marquee selection, soft-falloff deformation, and smooth weight painting.'],
        ['Sprite Paint & Cel Drawing', 'Pressure-ready brush strokes, Smart Lasso cutouts, and multi-layer painting on a wide viewport.'],
        ['Multi-Panel Stage Space', 'Keep the Outliner, Inspector, Dope Sheet, and Audio lanes visible side by side.']
      ]
    },
    {
      id: 'win-parity',
      moduleKey: 'win_parity',
      tagLeft: 'Continuity',
      tagRight: '.k2d.json',
      title: 'Android ↔ Windows Parity',
      blurb: 'Start a rig or rough pass on Android and continue on Windows using the same portable local .k2d.json project format.',
      cueLeft: 'Cross-platform',
      cueRight: 'Details ↗',
      sheetLead: 'One local file format across mobile and desktop—no accounts, no subscriptions, and no cloud lock-in.',
      details: [
        ['Shared Project Format', 'Skeletons, Smart Bone dials, 2.5D meshes, Glass Plate FX chips, and timeline tracks travel cleanly inside .k2d.json.'],
        ['Offline-First Pipeline', 'Move projects over USB or local storage and render directly to your machine with native export.'],
        ['Same Core Engine', 'Identical deterministic evaluation between Android and Windows so poses and timing match 1:1.'],
        ['No Accounts or Telemetry', 'Your files stay strictly on your own devices.']
      ]
    },
    {
      id: 'win-soon',
      moduleKey: 'win_soon',
      tagLeft: 'Roadmap',
      tagRight: 'Stay tuned',
      title: 'More Coming Soon',
      blurb: 'Additional Windows capabilities, desktop previews, and release milestones will be announced here as development progresses.',
      cueLeft: 'Follow updates',
      cueRight: 'Notes ↗',
      sheetLead: 'TwoD Studio for Windows is actively under development. New feature announcements and preview builds will appear here and in GitHub Discussions.',
      details: [
        ['Desktop Previews', 'Screenshots, demo reels, and workflow walkthroughs will be added to this space as builds lock in.'],
        ['Community Input', 'Have a desktop workflow, shortcut, or export feature you care about? Share it in GitHub Discussions.'],
        ['Release Announcements', 'Published Windows packages will appear automatically under What\'s New and GitHub Releases.'],
        ['Built Carefully', 'Focusing on stability, stage-to-export parity, and real animation feel before rushing a public drop.']
      ]
    }
  ];

  let liveReleases = [
    {
      tag: 'v1.6.2',
      date: 'Android · Build 29',
      title: 'TwoD Studio v1.6.2',
      summary: 'Touch-first 2D/2.5D rigging, Contour Fit meshes, Smart Bone dials, Sprite Paint Studio, Glass Plate Shader FX, 2-track audio mixing, and local MP4/PNG/Sprite Sheet export.',
      url: `https://github.com/${OWNER}/${REPO}/releases`
    }
  ];

  // Live discussions array — starts empty (NO fake placeholders!)
  let liveDiscussions = [];
  let discussionsSynced = false;

  function esc(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function cleanSummary(body) {
    if (!body) return 'View full release notes and assets on GitHub Releases.';
    const s = body
      .replace(/```[\s\S]*?```/g, '')
      .replace(/[#>*_`]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
    return s.length > 175 ? s.slice(0, 172).trim() + '...' : s;
  }

  function renderReleaseStream(items) {
    return items.slice(0, 3).map(r => `
      <div class="l2-stream-row">
        <div class="l2-stream-meta">
          <b>${esc(r.tag)}</b>
          <span>${esc(r.date)}</span>
        </div>
        <div class="l2-stream-title">${esc(r.title)}</div>
      </div>
    `).join('');
  }

  function renderDiscussionCardBody(items) {
    if (!items || items.length === 0) {
      return `
        <div class="l2-empty-box">
          <div class="l2-empty-title">No discussion threads yet</div>
          <p class="l2-empty-copy">
            Stay tuned for upcoming announcements and dev notes—or be the first to start a conversation, ask a question, or share a rig test on GitHub.
          </p>
        </div>
      `;
    }
    return `
      <div class="l2-stream">
        ${items.slice(0, 3).map(d => `
          <div class="l2-stream-row">
            <div class="l2-stream-meta">
              <b>${esc(d.category || 'Discussion')}</b>
              <span>${esc(d.date || '')}${typeof d.comments === 'number' ? ' · ' + d.comments + (d.comments === 1 ? ' reply' : ' replies') : ''}</span>
            </div>
            <div class="l2-stream-title">${esc(d.title)}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  async function hydrateReleases(streamEl, statusEl) {
    try {
      const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/releases?per_page=4`, {
        headers: { 'Accept': 'application/vnd.github+json' }
      });
      if (!res.ok) return;
      const data = await res.json();
      if (!Array.isArray(data) || !data.length) return;

      liveReleases = data.map(rel => ({
        tag: rel.tag_name || 'Release',
        date: rel.published_at ? new Date(rel.published_at).toLocaleDateString('en-US', {
          month: 'short', day: 'numeric', year: 'numeric'
        }) : 'Release',
        title: rel.name || rel.tag_name || 'TwoD Studio Release',
        summary: cleanSummary(rel.body),
        url: rel.html_url || `https://github.com/${OWNER}/${REPO}/releases`
      }));

      if (streamEl) streamEl.innerHTML = renderReleaseStream(liveReleases);
      if (statusEl) statusEl.textContent = 'Synced from GitHub';
    } catch (_) {
      // Offline or rate-limited: fallback stays intact
    }
  }

  async function hydrateDiscussions(bodyEl, statusEl) {
    // Loads discussions.json generated automatically by .github/workflows/sync-discussions.yml
    // On GitHub Pages (https://), this stays 100% live without exposing any API token.
    const candidates = [
      './discussions.json',
      `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/discussions.json`
    ];

    for (const url of candidates) {
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) continue;
        const data = await res.json();
        if (!Array.isArray(data)) continue;

        liveDiscussions = data.map(d => ({
          category: d.category || 'Discussion',
          date: d.updatedAt ? new Date(d.updatedAt).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
          }) : (d.date || ''),
          author: d.author || '',
          comments: typeof d.comments === 'number' ? d.comments : 0,
          title: d.title || 'Untitled Thread',
          excerpt: cleanSummary(d.excerpt || d.body || ''),
          url: d.url || `https://github.com/${OWNER}/${REPO}/discussions`
        }));
        discussionsSynced = true;
        if (bodyEl) bodyEl.innerHTML = renderDiscussionCardBody(liveDiscussions);
        if (statusEl) {
          statusEl.textContent = liveDiscussions.length > 0
            ? `${liveDiscussions.length} Live ${liveDiscussions.length === 1 ? 'Thread' : 'Threads'}`
            : 'Open · GitHub';
        }
        return;
      } catch (_) {
        // Try next candidate or stay cleanly in honest empty state
      }
    }
  }

  window.TWOD_LAYER2 = {
    init(world2El, world3El, opts) {
      const repoUrl = (opts && opts.repoUrls && opts.repoUrls.repo) || `https://github.com/${OWNER}/${REPO}`;
      const releasesUrl = (opts && opts.repoUrls && opts.repoUrls.releases) || `${repoUrl}/releases`;
      const discussionsUrl = `${repoUrl}/discussions`;
      const newDiscussionUrl = `${repoUrl}/discussions/new/choose`;

      // =====================================================
      // PLANE 2: LEARN MORE (4 UNCLUTTERED FLOATING PLATES)
      // =====================================================
      world2El.innerHTML = `
        <!-- CENTER HERO: WINDOWS BUILD TEASER (OPENS SUB-PLANE 2B) -->
        <section class="glass-plate expandable" id="l2-windows">
          <div class="l2-status">
            <span class="layer-dot"></span>
            <span>Under Development · Desktop Edition</span>
          </div>
          <h1 class="l2-hero-title">TwoD Studio<br /><span>for Windows</span></h1>
          <p class="l2-hero-lead">
            The desktop edition of TwoD Studio is currently in development. Step inside to see what is planned for Windows and follow progress as milestones arrive.
          </p>
          <div class="l2-actions">
            <button class="l2-btn-glass" id="l2-enter-windows">
              <span>Explore Windows Preview</span>
              <span>↘</span>
            </button>
            <button class="l2-btn-ghost" id="l2-open-manual-btn">Read User Manual</button>
            <button class="l2-btn-ghost" id="l2-back-to-l1">← Back to Studio</button>
          </div>
          <div class="l2-meta-line">
            Click this plate to zoom into the Windows preview space · Press Esc to pull back
          </div>
        </section>

        <!-- UPPER-RIGHT: WHAT'S NEW (LIVE GITHUB RELEASES) -->
        <article class="glass-plate expandable" id="l2-releases" data-module="l2_releases">
          <div class="l2-plate-label">
            <span>What's new</span>
            <span id="l2-rel-badge">Releases</span>
          </div>
          <h2 class="l2-plate-heading">Latest Builds</h2>
          <div class="l2-stream" id="l2-rel-stream">
            ${renderReleaseStream(liveReleases)}
          </div>
          <div class="l2-plate-cue">
            <span>Changelog &amp; APKs</span>
            <span>Expand ↗</span>
          </div>
        </article>

        <!-- LOWER-LEFT: LIVE REPOSITORY DISCUSSIONS (HONEST EMPTY STATE) -->
        <article class="glass-plate expandable" id="l2-discussions" data-module="l2_discussions">
          <div class="l2-plate-label">
            <span>Repository</span>
            <span id="l2-disc-badge">Discussions</span>
          </div>
          <h2 class="l2-plate-heading">Announcements &amp; Discussions</h2>
          <div id="l2-disc-body">
            ${renderDiscussionCardBody(liveDiscussions)}
          </div>
          <div class="l2-plate-cue">
            <a href="${esc(newDiscussionUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" style="color: var(--accent);">Start a thread ↗</a>
            <span>Open ↗</span>
          </div>
        </article>

        <!-- LOWER-RIGHT: USER MANUAL FLOATING FOLIO PLATE -->
        <article class="glass-plate expandable" id="l2-manual" data-folio="manual">
          <div class="l2-plate-label">
            <span>Documentation</span>
            <span>5 Parts · Interactive</span>
          </div>
          <h2 class="l2-plate-heading">User Manual</h2>
          <p class="l2-plate-copy">
            Complete operating guide covering workspace controls, Universal Gizmo, Smart Bone dials, Contour Fit 2.5D meshes, Glass Plate FX, walking paths, audio, and export.
          </p>
          <div class="l2-stream">
            <div class="l2-stream-row">
              <div class="l2-stream-meta">
                <b>Parts I–III</b>
                <span>Workspace, Cutouts &amp; Rigging</span>
              </div>
              <div class="l2-stream-title">Universal Gizmo, 6 presets, Smart Bones &amp; Sub-Rigs</div>
            </div>
            <div class="l2-stream-row">
              <div class="l2-stream-meta">
                <b>Parts IV–V</b>
                <span>2.5D, Shader FX &amp; Export</span>
              </div>
              <div class="l2-stream-title">Contour Fit meshes, Glass Plate FX, 2-track audio &amp; MP4</div>
            </div>
          </div>
          <div class="l2-plate-cue">
            <a href="user-manual/index.html" style="color: inherit;">user-manual/</a>
            <span>Open Manual ↗</span>
          </div>
        </article>
      `;

      // =====================================================
      // SUB-PLANE 2B (PLANE 3): WINDOWS BUILD FOCUS SPACE
      // =====================================================
      if (world3El) {
        world3El.innerHTML = `
          <!-- CENTER WINDOWS FOCUS ANCHOR -->
          <section class="glass-plate" id="win-center">
            <div class="l2-status">
              <span class="layer-dot"></span>
              <span>Windows Desktop · Under Development</span>
            </div>
            <h1 class="l2-hero-title" style="font-size: clamp(36px, 3.8vw, 50px);">TwoD Studio<br /><span>for Windows</span></h1>
            <p class="l2-hero-lead" style="margin-bottom: 24px;">
              Built on the same offline 2D/2.5D engine as Android—expanding onto desktop screens with keyboard speed, pen-tablet precision, and full project compatibility.
            </p>
            <div class="l2-actions" style="margin-bottom: 18px;">
              <a class="l2-btn-glass" href="${esc(discussionsUrl)}" target="_blank" rel="noopener noreferrer">
                <span>Follow Updates in Discussions</span>
                <span>↗</span>
              </a>
              <button class="l2-btn-ghost" id="win-back-to-l2">← Back to Learn More</button>
            </div>
            <div class="l2-meta-line">
              Windows 10 / 11 (x64) · Portable .k2d.json · Press Esc to step back
            </div>
          </section>

          <!-- ORBITING SMALLER FLOATING WINDOWS CARDS -->
          ${WINDOWS_CARDS.map(card => `
            <article class="glass-plate win-mini-plate expandable" id="${esc(card.id)}" data-module="${esc(card.moduleKey)}">
              <div class="l2-plate-label">
                <span>${esc(card.tagLeft)}</span>
                <span>${esc(card.tagRight)}</span>
              </div>
              <h2 class="l2-plate-heading">${esc(card.title)}</h2>
              <p class="l2-plate-copy">${esc(card.blurb)}</p>
              <div class="l2-plate-cue">
                <span>${esc(card.cueLeft)}</span>
                <span>${esc(card.cueRight)}</span>
              </div>
            </article>
          `).join('')}
        `;
      }

      // Wire buttons
      const backBtn = world2El.querySelector('#l2-back-to-l1');
      if (backBtn && opts && opts.onReturnToLayer1) {
        backBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          opts.onReturnToLayer1();
        });
      }
      const enterWinBtn = world2El.querySelector('#l2-enter-windows');
      if (enterWinBtn && opts && opts.onOpenWindowsPlane) {
        enterWinBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          opts.onOpenWindowsPlane();
        });
      }
      const manualBtn = world2El.querySelector('#l2-open-manual-btn');
      if (manualBtn && opts && opts.onOpenManual) {
        manualBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          opts.onOpenManual();
        });
      }
      if (world3El) {
        const winBackBtn = world3El.querySelector('#win-back-to-l2');
        if (winBackBtn && opts && opts.onReturnToLayer2) {
          winBackBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            opts.onReturnToLayer2();
          });
        }
      }

      // Hydrate live Releases and live Discussions
      hydrateReleases(
        world2El.querySelector('#l2-rel-stream'),
        world2El.querySelector('#l2-rel-badge')
      );
      hydrateDiscussions(
        world2El.querySelector('#l2-disc-body'),
        world2El.querySelector('#l2-disc-badge')
      );

      // Register expandable glass sheets for Plane 2 & Plane 3
      const modules = {
        l2_releases: {
          nodeId: 'l2-releases',
          idx: 'Releases',
          cat: "What's new",
          narrow: true,
          glass: true,
          render: () => `
            <div class="sheet-body">
              <h2 class="sheet-title">Latest Builds</h2>
              <p class="sheet-lead">Releases synced directly from GitHub. Select any version to view full release notes and download the APK.</p>
              <div class="l2-sheet-stream">
                ${liveReleases.map(r => `
                  <a class="l2-sheet-link" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">
                    <div class="l2-stream-meta">
                      <b>${esc(r.tag)}</b>
                      <span>${esc(r.date)}</span>
                    </div>
                    <h3>${esc(r.title)}</h3>
                    <p>${esc(r.summary)}</p>
                  </a>
                `).join('')}
              </div>
              <div style="margin-top: 26px;">
                <a class="l2-btn-glass" href="${esc(releasesUrl)}" target="_blank" rel="noopener noreferrer">
                  <span>All GitHub Releases</span><span>↗</span>
                </a>
              </div>
            </div>
          `
        },
        l2_discussions: {
          nodeId: 'l2-discussions',
          idx: 'Discussions',
          cat: 'Repository',
          narrow: true,
          glass: true,
          render: () => {
            if (!liveDiscussions.length) {
              return `
                <div class="sheet-body">
                  <h2 class="sheet-title">Announcements &amp; Discussions</h2>
                  <p class="sheet-lead">
                    There are no discussion threads in the repository yet. Stay tuned for announcements, build notes, and Windows previews—or start a thread yourself to ask a question, report a bug, or share something you animated.
                  </p>
                  <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px;">
                    <a class="l2-btn-glass" href="${esc(newDiscussionUrl)}" target="_blank" rel="noopener noreferrer">
                      <span>Start a Discussion</span><span>↗</span>
                    </a>
                    <a class="l2-btn-ghost" href="${esc(discussionsUrl)}" target="_blank" rel="noopener noreferrer">
                      <span>View Discussions Tab</span><span>↗</span>
                    </a>
                  </div>
                </div>
              `;
            }
            return `
              <div class="sheet-body">
                <h2 class="sheet-title">Announcements &amp; Discussions</h2>
                <p class="sheet-lead">Live threads from the TwoD Studio repository. Click any thread to read or reply on GitHub.</p>
                <div class="l2-sheet-stream">
                  ${liveDiscussions.map(d => `
                    <a class="l2-sheet-link" href="${esc(d.url)}" target="_blank" rel="noopener noreferrer">
                      <div class="l2-stream-meta">
                        <b>${esc(d.category)}</b>
                        <span>${esc(d.author ? '@' + d.author + ' · ' : '')}${esc(d.date)}${typeof d.comments === 'number' ? ' · ' + d.comments + (d.comments === 1 ? ' reply' : ' replies') : ''}</span>
                      </div>
                      <h3>${esc(d.title)}</h3>
                      ${d.excerpt ? `<p>${esc(d.excerpt)}</p>` : ''}
                    </a>
                  `).join('')}
                </div>
                <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 26px;">
                  <a class="l2-btn-glass" href="${esc(newDiscussionUrl)}" target="_blank" rel="noopener noreferrer">
                    <span>Start a Discussion</span><span>↗</span>
                  </a>
                  <a class="l2-btn-ghost" href="${esc(discussionsUrl)}" target="_blank" rel="noopener noreferrer">
                    <span>All Discussions on GitHub</span><span>↗</span>
                  </a>
                </div>
              </div>
            `;
          }
        }
      };

      // Register each Windows sub-plane card as an expandable sheet
      WINDOWS_CARDS.forEach(card => {
        modules[card.moduleKey] = {
          nodeId: card.id,
          idx: card.tagLeft,
          cat: 'Windows Preview',
          glass: true,
          title: card.title,
          lead: card.sheetLead,
          details: card.details
        };
      });

      return {
        modules,
        orderL2: ['l2_releases', 'l2_discussions'],
        orderL3: WINDOWS_CARDS.map(c => c.moduleKey)
      };
    }
  };
})();
