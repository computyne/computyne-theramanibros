// SEO Title: Freight Invoice Audit Checklist: 12 Billing Errors to Catch Before You Pay
// Meta Description: Use this 12-point freight invoice audit checklist to catch duplicate charges, rate mismatches, fuel surcharge errors, and other billing issues before payment.
// URL: /blog/freight-invoice-audit-checklist

const htmlString = `
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Freight Invoice Audit Checklist: 12 Billing Errors to Catch Before You Pay</title><meta name="description" content="Use this 12-point freight invoice audit checklist to catch duplicate charges, rate mismatches, fuel surcharge errors, and other billing issues before payment."><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet"><style>body{margin:0;padding:48px 0 80px;background:#F4F2EE;}</style></head><body>
<style>
  .fa-blog {
    --ink: #16213E;
    --ink-soft: #4A5270;
    --porcelain: #F4F2EE;
    --porcelain-deep: #E9E6DF;
    --paper: #FFFFFF;
    --line: #DDD9CF;
    --neon: #FF5F1F;
    --neon-deep: #D94300;
    --neon-soft: #FFE9DE;
    --neon-glow: rgba(255,95,31,0.22);
    font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--ink);
        
    line-height: 1.65;
    max-width: 920px;
    margin: 0 auto;
    padding: 0 24px;
  }
  .fa-blog * { box-sizing: border-box; }
  .fa-blog { overflow-x: clip; }
  html { scroll-behavior: smooth; }
html, body { overflow-x: clip; }
  .fa-blog h1, .fa-blog h2, .fa-blog h3 { font-family: "Fraunces", Georgia, serif; color: var(--ink); line-height: 1.2; font-weight: 600; letter-spacing: -0.01em; }
  .fa-blog h1 { font-size: 2.6rem; margin: 0 0 6px; }
  .fa-blog h2 { font-size: 1.7rem; margin: 0 0 20px; padding-bottom: 14px; position: relative; }
  .fa-blog h2::after { content: ""; position: absolute; left: 0; bottom: 0; width: 56px; height: 4px; border-radius: 4px; background: var(--neon); box-shadow: 0 0 14px var(--neon-glow); }
  .fa-blog h3 { font-size: 1.2rem; margin: 0; }
  .fa-blog p { margin: 0 0 16px; font-size: 1.02rem; }
  .fa-blog a { color: var(--neon-deep); font-weight: 500; text-decoration: underline; text-decoration-color: rgba(255,95,31,0.5); text-decoration-thickness: 2px; text-underline-offset: 3px; transition: text-decoration-color .2s, color .2s; }
  .fa-blog a:hover { color: var(--neon); text-decoration-color: var(--neon); }
  .fa-blog ul { margin: 0 0 16px; padding-left: 22px; }
  .fa-blog li { margin-bottom: 8px; font-size: 1.02rem; }
  .fa-blog strong { font-weight: 600; }

  .fa-section { padding: 44px 0 8px; }
  .fa-hero { padding: 24px 0 8px; position: relative; }
  .fa-hero::before { content: ""; position: absolute; z-index: 0; top: -60px; right: -120px; width: 420px; height: 420px; border-radius: 50%; background: radial-gradient(circle, var(--neon-glow) 0%, rgba(255,95,31,0) 68%); pointer-events: none; }
  .fa-hero > * { position: relative; z-index: 1; }
  .fa-intro-box { font-size: 1.15rem; line-height: 1.6; color: var(--ink); padding: 4px 0 4px 20px; border-left: 4px solid var(--neon); margin: 22px 0 22px; }
  .fa-intro-box p { font-size: 1.15rem; margin: 0; }
  .fa-hero-svg, .fa-docs-svg { width: 100%; height: auto; display: block; }
  .fa-hero-svg { margin: 28px 0 4px; }

  /* Documents section */
  .fa-docs-wrap { display: grid; grid-template-columns: 1fr 210px; gap: 32px; align-items: start; }
  .fa-docs-svg { margin-top: 6px; }
  .fa-callout { background: var(--neon-soft); border: 1px solid rgba(255,95,31,0.45); border-left: 5px solid var(--neon); border-radius: 10px; padding: 16px 20px; margin: 22px 0 8px; box-shadow: 0 6px 22px var(--neon-glow); }
  .fa-callout p { margin: 0; font-weight: 500; }

  /* Check cards */
  .chk-list { display: grid; gap: 22px; margin-top: 8px; }
  .chk { position: relative; background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 28px 28px 24px 32px; overflow: hidden; transition: box-shadow .25s ease, transform .25s ease, border-color .25s ease; }
  .chk::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: var(--neon); }
  .chk:hover { box-shadow: 0 14px 38px var(--neon-glow); transform: translateY(-2px); border-color: rgba(255,95,31,0.5); }
  .chk-head { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
  .chk-ico { flex: none; width: 46px; height: 46px; border-radius: 50%; background: var(--neon); display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 0 0 6px var(--neon-glow); }
  .chk-ico svg { width: 24px; height: 24px; stroke: #fff; }
  .chk-intro p { color: var(--ink-soft); }
  .chk-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 6px 0 16px; }
  .chk-box { border-radius: 12px; padding: 18px 20px 6px; }
  .chk-box p:last-child, .chk-box ul:last-child { margin-bottom: 12px; }
  .chk-box.spot { background: var(--porcelain); border: 1px solid var(--line); }
  .chk-box.example { background: var(--neon-soft); border: 1px dashed var(--neon); }
  .chk-box.request { background: var(--paper); border: 1px solid var(--line); }
  .chk-label { font-family: "IBM Plex Mono", monospace; font-size: 0.74rem; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--neon-deep); margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
  .chk-label::before { content: ""; width: 18px; height: 2px; background: var(--neon); border-radius: 2px; }
  .chk-box p, .chk-box li { font-size: 0.96rem; }
  .calc { list-style: none; padding: 0; background: rgba(255,255,255,0.7); border-radius: 8px; border: 1px solid rgba(255,95,31,0.3); overflow: hidden; }
  .calc li { margin: 0; padding: 8px 14px; border-top: 1px solid rgba(255,95,31,0.2); font-family: "IBM Plex Mono", monospace; font-size: 0.88rem; }
  .calc li:first-child { border-top: none; }
  .amt { font-weight: 600; color: var(--neon-deep); }
  .ticks { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 4px 20px; }
  .ticks li { position: relative; padding-left: 28px; margin: 0 0 6px; }
  .ticks li::before { content: "✓"; position: absolute; left: 0; top: 2px; width: 19px; height: 19px; border-radius: 50%; background: var(--neon); color: #fff; font-size: 0.7rem; font-weight: 700; display: flex; align-items: center; justify-content: center; line-height: 1; }
  .chk-notebox { margin-top: 16px; border-left: 3px solid var(--neon); background: var(--porcelain); border-radius: 0 10px 10px 0; padding: 14px 18px 2px; }
  .chk-notebox p { font-size: 0.95rem; color: var(--ink-soft); }

  /* Pre vs post */
  .pp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0 22px; }
  .pp-card { background: var(--paper); border: 1px solid var(--line); border-top: 5px solid var(--neon); border-radius: 14px; padding: 22px 22px 8px; }
  .pp-card.post { border-top-color: var(--ink); }
  .pp-card .chk-ico { margin-bottom: 14px; }
  .pp-card.post .chk-ico { background: var(--ink); box-shadow: 0 0 0 6px rgba(22,33,62,0.1); }

  /* Table */
  .fa-table-wrap { overflow-x: auto; margin: 22px 0 8px; border: 1px solid var(--line); border-radius: 12px; background: var(--paper); box-shadow: 0 8px 26px rgba(22,33,62,0.06); }
  .fa-table-wrap table { width: 100%; border-collapse: collapse; font-size: 0.94rem; min-width: 640px; }
  .fa-table-wrap th { text-align: left; background: var(--ink); color: #fff; font-family: "Fraunces", serif; font-weight: 600; padding: 14px 16px; border-bottom: 3px solid var(--neon); }
  .fa-table-wrap td { padding: 14px 16px; border-top: 1px solid var(--line); vertical-align: top; }
  .fa-table-wrap td:first-child { font-weight: 600; border-left: 4px solid var(--neon); }
  .fa-table-wrap tr:nth-child(even) td { background: var(--porcelain); }
  .fa-table-wrap tbody tr:hover td { background: var(--neon-soft); }
  .fa-sub { font-size: 1.25rem !important; margin: 30px 0 12px !important; }

  /* Workflow */
  .wf { list-style: none; padding: 0; margin: 20px 0 22px; position: relative; }
  .wf::before { content: ""; position: absolute; left: 21px; top: 22px; bottom: 22px; width: 2px; background: repeating-linear-gradient(to bottom, var(--neon) 0 6px, transparent 6px 12px); }
  .wf li { position: relative; margin: 0 0 14px; padding: 16px 20px 16px 72px; background: var(--paper); border: 1px solid var(--line); border-radius: 12px; font-size: 1rem; transition: border-color .2s, box-shadow .2s; }
  .wf li:hover { border-color: var(--neon); box-shadow: 0 8px 24px var(--neon-glow); }
  .wf-num { position: absolute; left: 0; top: 50%; margin-top: -21px; width: 44px; height: 44px; border-radius: 50%; background: var(--neon); color: #fff; font-family: "Fraunces", serif; font-weight: 700; font-size: 1.15rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 6px var(--porcelain), 0 0 18px var(--neon-glow); }

  /* FAQ */
  .fa-faq-list { margin-top: 8px; background: var(--paper); border: 1px solid var(--line); border-radius: 14px; padding: 4px 22px; }
  .fa-faq-item { border-bottom: 1px solid var(--line); }
  .fa-faq-item:last-child { border-bottom: none; }
  .fa-faq-item summary { cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 2px; font-family: "Fraunces", serif; font-size: 1.05rem; font-weight: 600; color: var(--ink); }
  .fa-faq-item summary::-webkit-details-marker { display: none; }
  .fa-faq-item summary::marker { content: ""; }
  .fa-faq-item summary:hover { color: var(--neon-deep); }
  .fa-faq-icon { flex: none; width: 28px; height: 28px; border-radius: 50%; background: var(--neon-soft); color: var(--neon-deep); display: flex; align-items: center; justify-content: center; font-family: "IBM Plex Sans", sans-serif; font-size: 1.2rem; line-height: 1; transition: transform .2s ease, background .2s; }
  .fa-faq-item[open] .fa-faq-icon { transform: rotate(45deg); background: var(--neon); color: #fff; }
  .fa-faq-item[open] summary { padding-bottom: 8px; }
  .fa-faq-answer { padding: 0 2px 18px; }
  .fa-faq-answer p { margin: 0; color: var(--ink-soft); font-size: 0.97rem; }

  /* CTA */
  #get-started { margin: 56px 0 0; padding: 52px 24px 44px; background: var(--neon); position: relative; overflow: hidden; border-radius: 18px; }
  #get-started::before { content: ""; position: absolute; right: -90px; top: -90px; width: 300px; height: 300px; border-radius: 50%; background: rgba(244,242,238,0.2); }
  #get-started::after { content: ""; position: absolute; left: -60px; bottom: -110px; width: 260px; height: 260px; border-radius: 50%; border: 36px solid rgba(244,242,238,0.16); }
  #get-started > * { position: relative; z-index: 1; max-width: 740px; }
  #get-started h2 { color: var(--ink); }
  #get-started h2::after { background: var(--porcelain); box-shadow: none; }
  #get-started p { color: var(--ink); font-size: 1.05rem; }
  #get-started a { color: var(--ink); font-weight: 600; text-decoration-color: var(--ink); background: var(--porcelain); padding: 2px 8px; border-radius: 6px; text-decoration: none; display: inline-block; transition: transform .2s, box-shadow .2s; }
  #get-started a:hover { color: var(--ink); transform: translateY(-1px); box-shadow: 0 6px 16px rgba(22,33,62,0.25); }

  @media (max-width: 720px) {
    .fa-blog h1 { font-size: 2rem; }
    .fa-blog h2 { font-size: 1.45rem; }
    .fa-docs-wrap, .chk-grid, .pp-grid, .ticks { grid-template-columns: 1fr; }
    .fa-docs-svg { max-width: 190px; }
    .chk { padding: 22px 18px 18px 22px; }
    #get-started { margin: 48px 0 0; padding: 40px 18px; }
    .fa-blog { padding: 0 16px; }
    /* Layout + sticky TOC */
.fa-layout { display: grid; grid-template-columns: minmax(0, 1fr) 280px; gap: 48px; align-items: start; }
.fa-main { min-width: 0; }
.fa-blog section { scroll-margin-top: 96px; }
.fa-toc { position: sticky; top: 96px; align-self: start; max-height: calc(100vh - 120px); overflow-y: auto; margin-top: 24px; padding: 20px 16px; background: var(--paper); border: 1px solid var(--line); border-top: 5px solid var(--neon); border-radius: 14px; box-shadow: 0 8px 26px rgba(22,33,62,0.06); }
.fa-toc-title { font-family: "Fraunces", Georgia, serif; font-size: 1.05rem; font-weight: 600; color: var(--ink); margin: 0 0 12px 10px; }
.fa-toc ol { list-style: none; margin: 0; padding: 0; }
.fa-toc li { margin: 0; font-size: inherit; }
.fa-blog .fa-toc a { display: flex; gap: 10px; padding: 8px 10px; border-left: 3px solid transparent; border-radius: 8px; font-size: 0.88rem; line-height: 1.4; font-weight: 500; color: var(--ink-soft); text-decoration: none; transition: background .2s, color .2s, border-color .2s; }
.fa-blog .fa-toc a:hover { background: var(--neon-soft); color: var(--neon-deep); }
.fa-blog .fa-toc a.active { background: var(--neon-soft); color: var(--ink); border-left-color: var(--neon); font-weight: 600; }
.fa-toc-num { flex: none; padding-top: 2px; font-family: "IBM Plex Mono", monospace; font-size: 0.74rem; color: var(--neon-deep); }

@media (max-width: 1023px) {
  .fa-layout { display: block; }
  .fa-main { max-width: 920px; margin: 0 auto; }
  .fa-toc { display: none; }
}
  /* CTA */
  .fa-blog #get-started { margin: 56px 0 0; padding: 0; background: none; border-radius: 0; overflow: visible; }
  .fa-blog #get-started::before, .fa-blog #get-started::after { content: none; }
 
  .cta-card { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); background: var(--paper); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; box-shadow: 0 14px 40px rgba(22,33,62,0.08); }
  .cta-main { padding: 44px 44px 40px; border-top: 5px solid var(--neon); }
  .fa-blog #get-started h2 { font-size: 1.75rem; margin: 0 0 22px; padding-bottom: 14px; color: var(--ink); }
  .fa-blog #get-started h2::after { background: var(--neon); box-shadow: 0 0 14px var(--neon-glow); }
  .cta-main p { color: var(--ink-soft); font-size: 1.02rem; max-width: 52ch; }
  .cta-main p.cta-lead { color: var(--ink); font-size: 1.1rem; }
 
  .fa-blog #get-started a.cta-btn { display: inline-flex; align-items: center; gap: 10px; margin-top: 10px; padding: 14px 24px; background: var(--neon); color: var(--ink); font-weight: 600; font-size: 1rem; line-height: 1.2; border-radius: 10px; text-decoration: none; box-shadow: 0 8px 22px var(--neon-glow); transition: transform .2s, box-shadow .2s, background .2s; }
  .fa-blog #get-started a.cta-btn:hover { background: #ff7440; color: var(--ink); transform: translateY(-2px); box-shadow: 0 12px 28px rgba(255,95,31,0.35); }
  .fa-blog #get-started a.cta-btn:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; }
  .cta-btn svg { width: 18px; height: 18px; stroke: currentColor; flex: none; }
 
  .cta-side { background: var(--ink); color: #fff; padding: 44px 36px 36px; }
  .cta-side h3 { color: #fff; font-size: 1.15rem; margin: 0 0 18px; }
  .cta-points { list-style: none; margin: 0; padding: 0; }
  .cta-points li { display: flex; gap: 14px; align-items: flex-start; margin: 0; padding: 13px 0; border-top: 1px solid rgba(255,255,255,0.14); font-size: 0.98rem; color: #E7E9F1; }
  .cta-points li:first-child { border-top: none; padding-top: 0; }
  .cta-points li::before { content: "✓"; flex: none; width: 22px; height: 22px; margin-top: 1px; border-radius: 50%; background: var(--neon); color: var(--ink); font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
  .cta-points strong { color: #fff; font-weight: 600; }
 
  @media (max-width: 820px) {
    .cta-card { grid-template-columns: 1fr; }
    .cta-main { padding: 32px 22px 28px; }
    .cta-side { padding: 28px 22px; }
    .fa-blog #get-started h2 { font-size: 1.45rem; }
    .fa-blog #get-started a.cta-btn { width: 100%; justify-content: center; }
  }

  }

</style>

<div class="fa-blog">
<div class="fa-layout">
<div class="fa-main">

<section id="hero" class="fa-hero">
  
  <div class="fa-intro-box">
    <p>A freight invoice can look correct at a glance and still include charges that should never reach accounts payable. A duplicate invoice, outdated carrier rate, or unsupported detention fee can go unnoticed when shipping documents and billing records sit in different systems.</p>
  </div>
  <p>A <strong>freight invoice audit</strong> checks what the carrier billed against what was agreed, what actually moved, and what the shipment records prove. The goal is straightforward: resolve discrepancies before payment instead of trying to recover money later.</p>
  <p>Use the 12-point checklist below to review freight bills consistently. Each check includes a practical example and the evidence to request when a charge does not add up.</p>
  <svg class="fa-hero-svg" viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a freight invoice being checked with a magnifying glass while a truck delivers the shipment">
    <defs><pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#DDD9CF"/></pattern></defs>
    <rect x="0" y="0" width="700" height="230" rx="18" fill="#FFFFFF" stroke="#DDD9CF"/>
    <rect x="1" y="1" width="698" height="228" rx="17" fill="url(#dots)"/>
    <!-- invoice -->
    <g transform="translate(70,26)">
      <rect x="0" y="0" width="190" height="178" rx="10" fill="#FFFFFF" stroke="#16213E" stroke-width="2"/>
      <rect x="0" y="0" width="190" height="34" rx="10" fill="#16213E"/>
      <rect x="0" y="22" width="190" height="12" fill="#16213E"/>
      <rect x="16" y="12" width="60" height="8" rx="4" fill="#FF5F1F"/>
      <g stroke="#DDD9CF" stroke-width="6" stroke-linecap="round">
        <line x1="18" y1="56" x2="120" y2="56"/><line x1="18" y1="80" x2="150" y2="80"/>
        <line x1="18" y1="128" x2="130" y2="128"/><line x1="18" y1="152" x2="100" y2="152"/>
      </g>
      <rect x="10" y="92" width="170" height="26" rx="6" fill="#FFE9DE" stroke="#FF5F1F" stroke-width="1.6"/>
      <line x1="18" y1="105" x2="110" y2="105" stroke="#FF5F1F" stroke-width="6" stroke-linecap="round"/>
      <circle cx="160" cy="105" r="6" fill="#FF5F1F"/>
      <path d="M157 105h6M160 102v6" stroke="#fff" stroke-width="1.6" stroke-linecap="round" transform="rotate(45 160 105)"/>
    </g>
    <!-- magnifier -->
    <g transform="translate(222,92)">
      <circle cx="40" cy="40" r="38" fill="rgba(255,95,31,0.10)" stroke="#FF5F1F" stroke-width="6"/>
      <line x1="68" y1="68" x2="104" y2="104" stroke="#FF5F1F" stroke-width="10" stroke-linecap="round"/>
      <path d="M24 42l11 11 21-24" fill="none" stroke="#16213E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <!-- dashed route -->
    <path d="M345 150 C 400 90, 450 190, 520 150" fill="none" stroke="#FF5F1F" stroke-width="2" stroke-dasharray="5 7"/>
    <!-- truck -->
    <g transform="translate(430,118)">
      <rect x="0" y="0" width="120" height="66" rx="6" fill="#16213E"/>
      <rect x="10" y="12" width="100" height="6" rx="3" fill="#FF5F1F"/>
      <rect x="10" y="26" width="64" height="6" rx="3" fill="#4A5270"/>
      <path d="M124 18h30l18 22v26h-48z" fill="#FF5F1F"/>
      <path d="M134 26h16l11 14h-27z" fill="#F4F2EE"/>
      <circle cx="30" cy="68" r="12" fill="#16213E" stroke="#F4F2EE" stroke-width="4"/>
      <circle cx="142" cy="68" r="12" fill="#16213E" stroke="#F4F2EE" stroke-width="4"/>
      <line x1="-40" y1="82" x2="190" y2="82" stroke="#DDD9CF" stroke-width="2"/>
    </g>
    <!-- pin & badge -->
    <g transform="translate(610,52)">
      <circle cx="0" cy="0" r="24" fill="#FF5F1F"/>
      <path d="M-10 0l7 7 14-15" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <circle cx="640" cy="196" r="6" fill="#FF5F1F" opacity="0.5"/><circle cx="332" cy="38" r="5" fill="#FF5F1F" opacity="0.6"/><circle cx="560" cy="30" r="4" fill="#16213E" opacity="0.5"/>
  </svg>
</section>

<section id="before-you-start" class="fa-section">
  <h2>Before You Start: The Documents to Collect</h2>
  <div class="fa-docs-wrap">
    <div>
      <p>Gather the carrier invoice, current contract or tariff, agreed rate confirmation, bill of lading (BOL), proof of delivery (POD), shipment or transportation management system (TMS) record, accessorial rules, fuel tables, credit memos, and prior payment history.</p>
      <p>For international or ocean shipments, you may also need terminal events, container release and return records, free-time terms, and currency details.</p>
      <p>Reconcile each invoice using a shipment identifier, such as a PRO number, BOL number, tracking number, or container number.</p>
      <p>Then compare base freight, accessorial charges, surcharges, adjustments, and taxes line by line.</p>
      <div class="fa-callout"><p>Missing evidence should create an exception to investigate, not an automatic assumption that every charge is invalid.</p></div>
    </div>
    <svg class="fa-docs-svg" viewBox="0 0 210 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a stack of shipping and billing documents">
      <rect x="40" y="30" width="140" height="190" rx="10" fill="#E9E6DF" stroke="#DDD9CF" transform="rotate(8 110 125)"/>
      <rect x="30" y="24" width="140" height="190" rx="10" fill="#FFE9DE" stroke="#FF5F1F" stroke-width="1.5" transform="rotate(-6 100 119)"/>
      <g transform="translate(34,18)">
        <rect x="0" y="0" width="140" height="190" rx="10" fill="#FFFFFF" stroke="#16213E" stroke-width="2"/>
        <rect x="14" y="16" width="52" height="10" rx="5" fill="#FF5F1F"/>
        <g stroke="#DDD9CF" stroke-width="6" stroke-linecap="round"><line x1="14" y1="48" x2="110" y2="48"/><line x1="14" y1="68" x2="90" y2="68"/><line x1="14" y1="88" x2="104" y2="88"/><line x1="14" y1="108" x2="76" y2="108"/></g>
        <rect x="14" y="128" width="112" height="1.5" fill="#DDD9CF"/>
        <circle cx="106" cy="156" r="20" fill="#FF5F1F"/>
        <path d="M96 156l7 7 13-15" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="14" y1="152" x2="60" y2="152" stroke="#16213E" stroke-width="5" stroke-linecap="round"/>
      </g>
      <rect x="78" y="6" width="44" height="22" rx="6" fill="#16213E"/><circle cx="100" cy="17" r="4" fill="#FF5F1F"/>
    </svg>
  </div>
</section>

<section id="checklist" class="fa-section">
  <h2>Freight Invoice Audit Checklist: 12 Billing Errors to Check</h2>
  <div class="chk-list">
<article class="chk" id="check-1">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="11" height="12" rx="2"/><path d="M5 16V6a2 2 0 0 1 2-2h8"/></svg></span><h3>1. Duplicate Billing</h3></div>
  <div class="chk-intro"><p>Duplicate billing occurs when a carrier charges more than once for the same freight movement. This may happen because of manual processing errors, resubmitted invoices, or differences between billing systems.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Look for shipments appearing on multiple invoices. Compare the carrier, shipment reference, service date, origin, destination, and amount. Do not rely exclusively on invoice numbers because duplicates may carry different invoice IDs.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>A freight movement costing <span class="amt">$640</span> appears on invoice F102 and again on invoice F109. Both relate to the same completed shipment.</p><p>If the second invoice is confirmed as a duplicate, the potential overcharge is <span class="amt">$640</span>.</p></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Copies of both invoices</li><li>Shipment references and billing history</li><li>Payment or adjustment records</li><li>A credit note or cancellation for the duplicate</li></ul></div>
  
</article>
<article class="chk" id="check-2">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9h8v8l-9 9z"/><circle cx="16" cy="8" r="1.4"/></svg></span><h3>2. Rate Doesn&rsquo;t Match the Contract or Tariff</h3></div>
  <div class="chk-intro"><p>Carriers sometimes bill using an incorrect rate, an outdated contract, or the wrong service classification.</p><p>This can happen when negotiated rates are updated but the carrier&rsquo;s billing system continues using older information.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Compare the invoice rate with the agreement that applied on the shipping date. Check the lane, equipment type, service level, and any effective-date conditions.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>A 500-mile shipment has a contracted rate of <span class="amt">$2.20</span> per mile.</p><ul class="calc"><li>Contracted amount: <span class="amt">$1,100</span></li><li>Invoiced amount at <span class="amt">$2.50</span> per mile: <span class="amt">$1,250</span></li><li>Potential overcharge: <span class="amt">$150</span></li></ul></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Original rate confirmation</li><li>Applicable contract or tariff</li><li>Effective rate dates</li><li>Explanation of the billed rate calculation</li></ul></div>
  
</article>
<article class="chk" id="check-3">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="12" width="16" height="8" rx="1.5"/><path d="M12 3v7M9 6l3-3 3 3"/></svg></span><h3>3. Unauthorized Accessorial Charges</h3></div>
  <div class="chk-intro"><p>Accessorial charges cover services beyond standard freight transportation, such as liftgate assistance, inside delivery, residential delivery, or redelivery.</p><p>These charges may be legitimate, but they must reflect services actually performed and the applicable agreement.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Review accessorial line items against shipment instructions, delivery records, and the carrier&rsquo;s rate schedule.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>A carrier adds an <span class="amt">$85</span> liftgate charge to a shipment delivered to a commercial warehouse with a standard loading dock.</p><p>The shipment documentation does not show that liftgate service was requested or performed.</p><p>The <span class="amt">$85</span> charge should be investigated.</p></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Service authorization</li><li>Driver notes</li><li>Signed proof of delivery</li><li>Applicable accessorial tariff</li></ul></div>
  
</article>
<article class="chk" id="check-4">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></svg></span><h3>4. Detention and Demurrage Charged Without Proof</h3></div>
  <div class="chk-intro"><p>Detention and demurrage charges can become expensive when shipment delays are not properly documented.</p><p>These terms may refer to different charges depending on the transport mode. Truck detention generally concerns time spent waiting beyond an agreed allowance. Ocean demurrage and detention are associated with container and terminal usage under applicable agreements and rules.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Compare the billed period with arrival, check-in, loading, unloading, equipment availability, and return timestamps.</p><p>Check the agreed free time and whether the circumstances justify the charge.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>A carrier bills three days of detention at <span class="amt">$150</span> per day.</p><ul class="calc"><li>Total billed: <span class="amt">$450</span></li><li>Supported chargeable time: One day</li><li>Supported amount: <span class="amt">$150</span></li><li>Potential discrepancy: <span class="amt">$300</span></li></ul></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Gate entry and exit records</li><li>Arrival and departure timestamps</li><li>Equipment availability notices</li><li>Free-time calculation</li><li>Contractual or regulatory billing basis</li></ul></div>
  <div class="chk-notebox"><p>For US ocean shipments, review the applicable Federal Maritime Commission requirements. Billing rules, dispute periods, and legal obligations should be verified for the shipment rather than assuming one universal standard.</p></div>
</article>
<article class="chk" id="check-5">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.2 6 10.5a6 6 0 0 1-12 0C6 9.2 12 3 12 3z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/></svg></span><h3>5. Fuel Surcharge Miscalculated</h3></div>
  <div class="chk-intro"><p>Fuel surcharges are often calculated using a published index or a formula specified in the carrier agreement.</p><p>An incorrect percentage, outdated fuel table, or wrong calculation base can lead to unnecessary charges.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Check the reference period, applicable fuel index, agreed percentage, and whether the surcharge should apply to linehaul or another defined charge base.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>A shipment has an eligible linehaul charge of <span class="amt">$1,200</span>.</p><p>The agreement specifies a 16% fuel surcharge.</p><ul class="calc"><li>Correct surcharge: <span class="amt">$192</span></li><li>Invoiced surcharge at 20%: <span class="amt">$240</span></li><li>Potential overcharge: <span class="amt">$48</span></li></ul></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Fuel surcharge schedule</li><li>Applicable index and reference date</li><li>Contractual formula</li><li>Detailed surcharge calculation</li></ul></div>
  
</article>
<article class="chk" id="check-6">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M5 20h14"/><path d="M5 8h14"/><path d="M5 8l-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z"/></svg></span><h3>6. Wrong Weight, Freight Class, or Dimensional Weight</h3></div>
  <div class="chk-intro"><p>Freight rates can depend on actual weight, dimensional weight, freight class, and other shipment characteristics.</p><p>Incorrect measurements or classification can significantly change the final charge.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Compare invoice details with the BOL, packing records, certified weights, and dimensions.</p><p>For dimensional-weight shipments, confirm the carrier&rsquo;s calculation method and divisor.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>A parcel weighs 12 lb and measures 12 &times; 12 &times; 16 inches.</p><p>Using an illustrative dimensional-weight divisor of 139, its dimensional weight rounds up to 17 lb. However, the carrier bills the shipment at 24 lb.</p><p>The difference requires verification of the dimensions, measurement method, and applicable divisor.</p></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Scale weight records</li><li>Package dimensions</li><li>Reweigh or remeasurement reports</li><li>Freight classification details</li><li>Applicable billing-weight formula</li></ul></div>
  
</article>
<article class="chk" id="check-7">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/></svg></span><h3>7. Wrong Origin, Destination, or Mileage</h3></div>
  <div class="chk-intro"><p>An incorrect shipping address, postcode, zone, or mileage calculation may affect the amount charged.</p><p>Even minor location discrepancies can matter for shipments priced by distance or delivery zone.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Compare the billed origin and destination with the actual shipping documents and agreed routing.</p><p>Review the mileage guide or zone structure used in the contract.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>The contract specifies a linehaul rate of <span class="amt">$2.10</span> per mile.</p><p>The carrier bills 560 miles, but the agreed mileage is 510 miles.</p><ul class="calc"><li>Mileage difference: 50 miles</li><li>Potential discrepancy: <span class="amt">$105</span></li></ul><p>This difference assumes the contracted rate applies to the disputed mileage.</p></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Route calculation</li><li>Recorded pickup and delivery addresses</li><li>Mileage guide</li><li>Applicable delivery zone information</li></ul></div>
  
</article>
<article class="chk" id="check-8">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19L19 5"/><circle cx="7" cy="7" r="2.600"/><circle cx="17" cy="17" r="2.600"/></svg></span><h3>8. Missed Contract Discounts or Incorrect Minimums</h3></div>
  <div class="chk-intro"><p>Freight contracts often include negotiated discounts, minimum charges, and service-specific pricing rules.</p><p>If these terms are not applied correctly, a shipment may cost more than expected.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Compare the invoice with the discount schedule and minimum charge provisions in the current agreement.</p><p>Check that the correct customer account and contract were used.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>The eligible linehaul charge is <span class="amt">$1,000,</span> and the contract includes a 15% discount.</p><ul class="calc"><li>Original amount: <span class="amt">$1,000</span></li><li>Discount: <span class="amt">$150</span></li><li>Expected amount before other valid charges: <span class="amt">$850</span></li></ul><p>If the invoice still shows <span class="amt">$1,000,</span> the missed discount is <span class="amt">$150</span>.</p></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Contract discount schedule</li><li>Minimum charge rules</li><li>Customer account details</li><li>Revised rating calculation</li></ul></div>
  
</article>
<article class="chk" id="check-9">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.500"/><path d="M8.500 8.500l7 7M15.500 8.500l-7 7"/></svg></span><h3>9. Billing for Failed or Cancelled Pickups</h3></div>
  <div class="chk-intro"><p>A carrier may charge for attempted pickups, late cancellations, or dispatch-related costs.</p><p>However, those charges should align with the contractual conditions and documented events.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Check the booking record, cancellation time, driver dispatch status, and applicable cancellation policy.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>A shipment is cancelled before the agreed dispatch cutoff.</p><p>The carrier later adds a <span class="amt">$90</span> attempted-pickup fee, despite the absence of a documented pickup attempt.</p><p>The fee should be reviewed against the contract.</p></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Dispatch records</li><li>Attempted-pickup documentation</li><li>Cancellation timestamp</li><li>Applicable cancellation policy</li></ul></div>
  
</article>
<article class="chk" id="check-10">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M9.500 14l2 2 3.500-4"/></svg></span><h3>10. Invoice Doesn&rsquo;t Match the BOL or Proof of Delivery</h3></div>
  <div class="chk-intro"><p>The bill of lading and proof of delivery provide important evidence about a shipment.</p><p>Differences in quantities, delivery locations, handling requirements, or shipment references can indicate an invoicing problem.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Compare the invoice with the BOL and signed POD.</p><p>Verify shipment references, service dates, pallet counts, and special handling details.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>Both the BOL and POD record 10 pallets.</p><p>However, the invoice includes handling charges for 12 pallets at <span class="amt">$18</span> each.</p><p>If the contract charges per pallet, the additional two pallets represent a potential <span class="amt">$36</span> discrepancy.</p></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Signed BOL</li><li>Proof of delivery</li><li>Shipment count records</li><li>Corrected invoice</li><li>Any documented count adjustment</li></ul></div>
  <div class="chk-notebox"><p>Maintaining accurate transportation documents makes invoice matching more reliable.</p><p>Computyne&rsquo;s <a href="https://www.computyne.com/bill-of-lading-data-entry-services">Bill of Lading Data Entry Services</a> support the organization and processing of shipping documentation.</p></div>
</article>
<article class="chk" id="check-11">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.500" y="5" width="17" height="15" rx="2"/><path d="M3.500 10h17M8 3v4M16 3v4"/></svg></span><h3>11. Late Invoices Outside the Billing Window</h3></div>
  <div class="chk-intro"><p>Carrier contracts and applicable regulations may specify when invoices must be issued or disputed.</p><p>An invoice received outside the relevant timeframe should be reviewed carefully, although late billing does not automatically invalidate every charge.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Compare the shipment or service date with the invoice issue date and the applicable agreement.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>A contract requires a particular charge to be invoiced within 30 days.</p><p>The carrier issues the invoice 46 days after the relevant event.</p><p>The 16-day difference should be flagged for review under the contract.</p></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Original invoice issue date</li><li>Shipment or service date</li><li>Applicable billing clause</li><li>Explanation for the delay</li><li>Any relevant tariff provision</li></ul></div>
  <div class="chk-notebox"><p>Billing deadlines vary by transport mode, agreement, and jurisdiction. Confirm which rules apply before disputing a charge solely on timing grounds.</p></div>
</article>
<article class="chk" id="check-12">
  <div class="chk-head"><span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.500"/><path d="M14.800 9.200c-.5-.9-1.500-1.400-2.800-1.400-1.600 0-2.700.8-2.700 2s1 1.700 2.700 2.100 2.900.9 2.900 2.200-1.200 2.100-2.900 2.100c-1.400 0-2.400-.6-3-1.600M12 6v2M12 16v2"/></svg></span><h3>12. Unapplied Credits, Tax, or Currency Errors</h3></div>
  <div class="chk-intro"><p>Freight invoices may also contain accounting discrepancies involving credit notes, tax calculations, or currency conversions.</p><p>These errors can be difficult to identify when multiple invoices and adjustments are handled separately.</p></div>
  <div class="chk-grid">
    <div class="chk-box spot"><div class="chk-label">How to spot it</div><p>Review carrier statements, open credits, previous payments, tax treatment, and currency conversion records.</p></div>
    <div class="chk-box example"><div class="chk-label">Example</div><p>A carrier previously issued a <span class="amt">$210</span> credit for an overcharge.</p><p>The credit remains open but is not applied to a subsequent eligible invoice.</p><p>The amount due may therefore be overstated by <span class="amt">$210</span>.</p></div>
  </div>
  <div class="chk-box request"><div class="chk-label">What to request from the carrier</div><ul class="ticks"><li>Credit memo</li><li>Statement of account</li><li>Payment and adjustment records</li><li>Tax calculation</li><li>Currency exchange-rate reference</li></ul></div>
  
</article>
  </div>
</section>

<section id="pre-vs-post" class="fa-section">
  <h2>Pre-Audit vs. Post-Audit: When Should You Check?</h2>
  <p>Freight invoices can be audited before or after payment. Both approaches serve a useful purpose.</p>
  <div class="pp-grid">
    <div class="pp-card pre">
      <span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.500 8-8 9-4.500-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg></span>
      <p><strong>Pre-audit</strong> focuses on identifying discrepancies before an invoice is approved or paid. It allows the accounts payable team to question unsupported charges and request corrections before funds are released.</p>
    </div>
    <div class="pp-card post">
      <span class="chk-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.500" cy="10.500" r="6.500"/><path d="M15.500 15.500L21 21"/></svg></span>
      <p><strong>Post-audit</strong> reviews invoices that have already been paid. The objective is to identify historical discrepancies, recover eligible overpayments, and find recurring billing issues.</p>
    </div>
  </div>
  <p>For example, a pre-audit may catch an incorrect fuel surcharge before payment. A post-audit may discover that the same incorrect surcharge was applied across several months of invoices.</p>
  <p>Many businesses combine both approaches.</p>
  <p>For a more detailed comparison, read Computyne&rsquo;s article on <a href="https://www.computyne.com/blog/pre-vs-post-freight-audit-cost-savings">Pre-Audit vs. Post-Audit Freight Cost Savings</a>.</p>
</section>

<section id="methods" class="fa-section">
  <h2>Manual vs. Software vs. Outsourced Freight Invoice Auditing</h2>
  <p>The right audit method depends on your shipment volume, carrier network, available systems, and internal resources.</p>
  <div class="fa-table-wrap">
    <table>
      <thead><tr><th>Approach</th><th>Best suited for</th><th>Main advantage</th><th>Limitation</th></tr></thead>
      <tbody>
        <tr><td>Manual auditing</td><td>Lower invoice volumes and limited carrier networks</td><td>Flexible and straightforward to start</td><td>Time-consuming and difficult to scale</td></tr>
        <tr><td>Freight audit software</td><td>Businesses handling repeatable, structured invoice volumes</td><td>Automated matching and exception identification</td><td>Requires reliable data and accurate rate rules</td></tr>
        <tr><td>Specialist audit support</td><td>Complex contracts, multiple transport modes, or large invoice backlogs</td><td>Dedicated validation and discrepancy follow-up</td><td>Requires clear service standards, secure access, and oversight</td></tr>
      </tbody>
    </table>
  </div>
  <h3 class="fa-sub">Where Freight Audit Software Helps</h3>
  <p>Freight audit software can compare invoice records with agreed rates and shipment data, identify duplicates, and flag differences for review.</p>
  <p>However, software cannot automatically resolve every dispute.</p>
  <p>Missing delivery records, unusual contract conditions, disputed detention charges, and incomplete shipment information may still require human investigation.</p>
  <div class="fa-callout"><p>A practical approach is to automate routine checks and send exceptions to trained reviewers.</p></div>
</section>

<section id="workflow" class="fa-section">
  <h2>A Simple Freight Invoice Audit Workflow</h2>
  <p>A consistent review process helps teams identify problems without delaying every invoice unnecessarily.</p>
  <ol class="wf">
    <li><span class="wf-num">1</span><strong>Match the shipment:</strong> Confirm that the invoice belongs to a valid shipment and has not already been processed.</li>
    <li><span class="wf-num">2</span><strong>Verify the charges:</strong> Recalculate freight rates, fuel surcharges, accessorials, discounts, and taxes.</li>
    <li><span class="wf-num">3</span><strong>Review supporting documents:</strong> Compare the invoice with the BOL, POD, carrier agreement, and shipment records.</li>
    <li><span class="wf-num">4</span><strong>Flag discrepancies:</strong> Record the amount, reason, and supporting evidence for each exception.</li>
    <li><span class="wf-num">5</span><strong>Resolve and document:</strong> Request clarification or corrections from the carrier and maintain a clear record of the outcome.</li>
  </ol>
  <p>This process becomes particularly important for businesses processing large numbers of invoices across multiple carriers.</p>
  <p>Computyne&rsquo;s <a href="https://www.computyne.com/case-studies/freight-audit-invoice-validation-global-logistics-company">Freight Audit and Invoice Validation Case Study</a> provides an example of freight invoice matching, verification, and discrepancy identification in a logistics environment.</p>
</section>

<section id="faq" class="fa-section">
  <h2>Frequently Asked Questions</h2>
  <div class="fa-faq-list">
    <details class="fa-faq-item"><summary>What is a freight invoice audit?<span class="fa-faq-icon">+</span></summary><div class="fa-faq-answer"><p>A freight invoice audit is the process of reviewing carrier invoices against agreed rates, shipment records, supporting documents, and applicable billing terms. It helps identify duplicate charges, rating errors, unsupported fees, and missing credits.</p></div></details>
    <details class="fa-faq-item"><summary>How do you audit freight invoices?<span class="fa-faq-icon">+</span></summary><div class="fa-faq-answer"><p>Start by matching each invoice to the relevant shipment. Check the contractual rate, fuel surcharge, accessorial fees, shipment weight, route, proof of delivery, and previous payments. Investigate discrepancies and document the carrier&rsquo;s response before closing the review.</p></div></details>
    <details class="fa-faq-item"><summary>What are the most common freight billing errors?<span class="fa-faq-icon">+</span></summary><div class="fa-faq-answer"><p>Common freight billing errors include duplicate invoices, incorrect rates, unsupported accessorial charges, fuel surcharge errors, incorrect shipment weights, missed discounts, and unapplied credits.</p></div></details>
    <details class="fa-faq-item"><summary>Can freight audit software catch every billing error?<span class="fa-faq-icon">+</span></summary><div class="fa-faq-answer"><p>No. Software can identify many rule-based errors and discrepancies, but missing documents, unusual contract terms, and disputed shipment events may require manual investigation.</p></div></details>
    <details class="fa-faq-item"><summary>Should freight invoices be audited before or after payment?<span class="fa-faq-icon">+</span></summary><div class="fa-faq-answer"><p>Both approaches are useful. Pre-audits help prevent avoidable overpayments, while post-audits can identify historical discrepancies and potential recoveries. The appropriate approach depends on the business&rsquo;s invoice volume, systems, and dispute deadlines.</p></div></details>
  </div>
</section>

<style>
  /* CTA */
  .fa-blog #get-started { margin: 56px 0 0; padding: 0; background: none; border-radius: 0; overflow: visible; }
  .fa-blog #get-started::before, .fa-blog #get-started::after { content: none; }
 
  .cta-card { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); background: var(--paper); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; box-shadow: 0 14px 40px rgba(22,33,62,0.08); }
  .cta-main { padding: 44px 44px 40px; border-top: 5px solid var(--neon); }
  .fa-blog #get-started h2 { font-size: 1.75rem; margin: 0 0 22px; padding-bottom: 14px; color: var(--ink); }
  .fa-blog #get-started h2::after { background: var(--neon); box-shadow: 0 0 14px var(--neon-glow); }
  .cta-main p { color: var(--ink-soft); font-size: 1.02rem; max-width: 52ch; }
  .cta-main p.cta-lead { color: var(--ink); font-size: 1.1rem; }
 
  .fa-blog #get-started a.cta-btn { display: inline-flex; align-items: center; gap: 10px; margin-top: 10px; padding: 14px 24px; background: var(--neon); color: var(--ink); font-weight: 600; font-size: 1rem; line-height: 1.2; border-radius: 10px; text-decoration: none; box-shadow: 0 8px 22px var(--neon-glow); transition: transform .2s, box-shadow .2s, background .2s; }
  .fa-blog #get-started a.cta-btn:hover { background: #ff7440; color: var(--ink); transform: translateY(-2px); box-shadow: 0 12px 28px rgba(255,95,31,0.35); }
  .fa-blog #get-started a.cta-btn:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; }
  .cta-btn svg { width: 18px; height: 18px; stroke: currentColor; flex: none; }
 
  .cta-side { background: var(--ink); color: #fff; padding: 44px 36px 36px; }
  .cta-side h3 { color: #fff; font-size: 1.15rem; margin: 0 0 18px; }
  .cta-points { list-style: none; margin: 0; padding: 0; }
  .cta-points li { display: flex; gap: 14px; align-items: flex-start; margin: 0; padding: 13px 0; border-top: 1px solid rgba(255,255,255,0.14); font-size: 0.98rem; color: #E7E9F1; }
  .cta-points li:first-child { border-top: none; padding-top: 0; }
  .cta-points li::before { content: "✓"; flex: none; width: 22px; height: 22px; margin-top: 1px; border-radius: 50%; background: var(--neon); color: var(--ink); font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
  .cta-points strong { color: #fff; font-weight: 600; }
 
  @media (max-width: 820px) {
    .cta-card { grid-template-columns: 1fr; }
    .cta-main { padding: 32px 22px 28px; }
    .cta-side { padding: 28px 22px; }
    .fa-blog #get-started h2 { font-size: 1.45rem; }
    .fa-blog #get-started a.cta-btn { width: 100%; justify-content: center; }
  }
</style>
 
 
<!-- =========================================================
  2) HTML: replace the whole <section id="get-started"> ... </section>
========================================================== -->
<section  class="fa-section">
  <div class="cta-card">
    <div class="cta-main">
      <h2>Turn Your Freight Audit Checklist Into a Repeatable Process</h2>
      <p class="cta-lead">Freight invoice errors are easier to manage when every charge can be traced back to an agreement, shipment record, or supporting document.</p>
      <p>For teams handling complex carrier agreements or large invoice volumes, consistent verification and exception management reduce the burden on finance and logistics. Computyne supports freight invoice validation, carrier rate verification, discrepancy resolution, and reporting.</p>
      
    </div>
    <div class="cta-side">
      <h3>A repeatable audit should cover</h3>
      <ul class="cta-points">
        <li><span><strong>Duplicates</strong> matched across carrier, reference, date, and amount</span></li>
        <li><span><strong>Contracted rates</strong> verified against the agreement in force</span></li>
        <li><span><strong>Accessorials and fuel surcharges</strong> tied to documented services</span></li>
        <li><span><strong>Shipment details</strong> checked against the BOL and POD</span></li>
        <li><span><strong>Open credits</strong> applied before payment</span></li>
      </ul>
      <a class="cta-btn" href="https://www.computyne.com/freight-audit-services">Explore Freight Audit Services
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>
</section>


</div>

</body></html>

`;

export default htmlString;
