"use client";

import React from "react";
import {
  Container,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Muted,
  Label,
  CodeText,
  Button,
  IconButton,
  Badge,
  Surface,
  Divider,
  PrathamflixLogo,
  CinematicIntro,
  AppShell,
} from "@/components";
import { useIntroState } from "@/hooks";
import {
  Layers,
  Sparkles,
  Palette,
  Type,
  CheckCircle2,
  ArrowRight,
  Code2,
  Eye,
  Play,
  RotateCcw,
  Compass,
} from "lucide-react";

export default function HomePage() {
  const {
    isIntroActive,
    hasReducedMotion,
    isMounted,
    completeIntro,
    replayIntro,
  } = useIntroState();

  return (
    <>
      {/* Cinematic Opening Intro Experience */}
      {isMounted && (
        <CinematicIntro
          isActive={isIntroActive}
          onComplete={completeIntro}
          hasReducedMotion={hasReducedMotion}
        />
      )}

      {/* Persistent Streaming App Shell & Navigation */}
      <AppShell>
        <main className="py-10 sm:py-16 md:py-20">
          <Container maxWidth="2xl">
            {/* Header Block with Brand & Controls */}
            <header className="space-y-6 mb-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <PrathamflixLogo size="lg" />

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={replayIntro}
                    leftIcon={<RotateCcw className="h-3.5 w-3.5" />}
                    aria-label="Replay Cinematic Intro"
                  >
                    Replay Intro
                  </Button>
                  <Badge variant="accent" size="md">
                    Phase 4: Navigation & Shell
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Heading1 className="tracking-tight text-white">
                  PRATHAMFLIX Navigation & Application Shell
                </Heading1>
                <Paragraph className="max-w-2xl text-neutral-400">
                  Streaming-inspired navigation shell with scroll-aware opacity, responsive mobile drawer,
                  accessible keyboard navigation, and route architecture.
                </Paragraph>
              </div>
            </header>

            <Divider variant="gradient" className="my-8" />

            {/* Section 0: Navigation Shell Feature Overview */}
            <section className="space-y-6 my-12" aria-labelledby="section-navigation">
              <div className="flex items-center gap-2.5">
                <Compass className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                <Heading2 id="section-navigation">Navigation Architecture & Shell</Heading2>
              </div>
              <Muted>
                Primary routes and entry points are established with active indicators and responsive breakpoints.
              </Muted>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <Surface elevation="elevated" padding="md" className="space-y-2">
                  <Label>Scroll-Aware Header</Label>
                  <Paragraph className="text-xs text-neutral-400">
                    Transitions smoothly from top gradient to backdrop-blur surface on scroll.
                  </Paragraph>
                  <Badge variant="neutral">Passive Scroll Hook</Badge>
                </Surface>

                <Surface elevation="elevated" padding="md" className="space-y-2">
                  <Label>Mobile Drawer Navigation</Label>
                  <Paragraph className="text-xs text-neutral-400">
                    Touch-friendly menu with Escape key listener and body scroll lock.
                  </Paragraph>
                  <Badge variant="neutral">Framer Motion Spring</Badge>
                </Surface>

                <Surface elevation="elevated" padding="md" className="space-y-2">
                  <Label>Modular Route Placeholders</Label>
                  <Paragraph className="text-xs text-neutral-400">
                    Projects, Skills, Achievements, Resume, and My List route entry points.
                  </Paragraph>
                  <Badge variant="neutral">App Router Structure</Badge>
                </Surface>
              </div>
            </section>

            <Divider variant="subtle" className="my-10" />

            {/* Section 1: Logo & Brand Scale */}
            <section className="space-y-6 my-12" aria-labelledby="section-brand">
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                <Heading2 id="section-brand">Brand Logo & Scale Tokens</Heading2>
              </div>
              <Muted>
                Vector SVG geometric monogram and typographic wordmark scaling across viewports.
              </Muted>

              <Surface elevation="elevated" padding="lg" className="space-y-6">
                <div className="space-y-2">
                  <Label>Hero / Intro Size (hero)</Label>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center">
                    <PrathamflixLogo size="hero" />
                  </div>
                </div>

                <Divider variant="subtle" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Large (lg)</Label>
                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-center">
                      <PrathamflixLogo size="lg" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Medium (md)</Label>
                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-center">
                      <PrathamflixLogo size="md" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Small (sm - Navigation)</Label>
                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-center">
                      <PrathamflixLogo size="sm" />
                    </div>
                  </div>
                </div>
              </Surface>
            </section>

            <Divider variant="subtle" className="my-10" />

            {/* Section 2: Color Tokens & Surfaces */}
            <section className="space-y-6 my-12" aria-labelledby="section-colors">
              <div className="flex items-center gap-2.5">
                <Palette className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                <Heading2 id="section-colors">Color Tokens & Surfaces</Heading2>
              </div>
              <Muted>
                Semantic tokens define hierarchy, dark cinematic depth, and ambient contrast.
              </Muted>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <Surface elevation="base" padding="md" className="space-y-2">
                  <Label>Base Surface</Label>
                  <Paragraph className="text-xs text-neutral-400">
                    Primary background foundation (`--surface`)
                  </Paragraph>
                  <CodeText>#0f1118</CodeText>
                </Surface>

                <Surface elevation="elevated" padding="md" className="space-y-2">
                  <Label>Elevated Surface</Label>
                  <Paragraph className="text-xs text-neutral-400">
                    Lifted card & overlay level (`--surface-elevated`)
                  </Paragraph>
                  <CodeText>#161922</CodeText>
                </Surface>

                <Surface elevation="glass" padding="md" className="space-y-2">
                  <Label>Glass Surface</Label>
                  <Paragraph className="text-xs text-neutral-400">
                    Backdrop blur & translucency
                  </Paragraph>
                  <CodeText>rgba(255,255,255,0.03)</CodeText>
                </Surface>

                <Surface
                  elevation="subtle"
                  padding="md"
                  className="space-y-2 border-[var(--accent)]/30 bg-[var(--accent-subtle)]"
                >
                  <Label className="text-[var(--accent)]">Brand Accent</Label>
                  <Paragraph className="text-xs text-neutral-300">
                    Cinematic Crimson (`--accent`)
                  </Paragraph>
                  <CodeText>#e50926</CodeText>
                </Surface>
              </div>
            </section>

            <Divider variant="subtle" className="my-10" />

            {/* Section 3: Typography Hierarchy */}
            <section className="space-y-6 my-12" aria-labelledby="section-typography">
              <div className="flex items-center gap-2.5">
                <Type className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                <Heading2 id="section-typography">Typography Hierarchy</Heading2>
              </div>
              <Muted>
                Proportional scale engineered for readability, high hierarchy, and responsiveness.
              </Muted>

              <Surface elevation="subtle" padding="lg" className="space-y-6">
                <div className="space-y-1">
                  <Label>Heading 1 / Page Title</Label>
                  <Heading1>The Cinematic Developer Experience</Heading1>
                </div>
                <Divider variant="subtle" />
                <div className="space-y-1">
                  <Label>Heading 2 / Section Title</Label>
                  <Heading2>Engineered for High-End Interaction</Heading2>
                </div>
                <Divider variant="subtle" />
                <div className="space-y-1">
                  <Label>Heading 3 / Subtitle</Label>
                  <Heading3>Structured Modular Components</Heading3>
                </div>
                <Divider variant="subtle" />
                <div className="space-y-1">
                  <Label>Heading 4 / Card Title</Label>
                  <Heading4>Interactive Surface Elevation</Heading4>
                </div>
                <Divider variant="subtle" />
                <div className="space-y-1">
                  <Label>Body Paragraph & Code</Label>
                  <Paragraph>
                    Typography prioritizes contrast, responsive scaling, and clean tracking. Code snippets like{" "}
                    <CodeText>framer-motion</CodeText> and <CodeText>tailwindcss</CodeText> match the terminal aesthetic.
                  </Paragraph>
                </div>
              </Surface>
            </section>

            <Divider variant="subtle" className="my-10" />

            {/* Section 4: Button & Interaction Primitives */}
            <section className="space-y-6 my-12" aria-labelledby="section-buttons">
              <div className="flex items-center gap-2.5">
                <Play className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                <Heading2 id="section-buttons">Button & Interaction Primitives</Heading2>
              </div>
              <Muted>
                Accessible, keyboard-navigable buttons with focus rings, hover depth, and loading states.
              </Muted>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="accent" leftIcon={<Sparkles className="h-4 w-4" />}>
                    Accent Action
                  </Button>
                  <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Primary Action
                  </Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Label className="mr-2">Sizes:</Label>
                  <Button size="sm" variant="accent">
                    Small (sm)
                  </Button>
                  <Button size="md" variant="accent">
                    Medium (md)
                  </Button>
                  <Button size="lg" variant="accent">
                    Large (lg)
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Label className="mr-2">States:</Label>
                  <Button variant="accent" isLoading>
                    Loading State
                  </Button>
                  <Button variant="secondary" disabled>
                    Disabled
                  </Button>
                  <IconButton aria-label="View Code" variant="outline" size="md">
                    <Code2 className="h-4 w-4" />
                  </IconButton>
                  <IconButton aria-label="Preview" variant="accent" size="md">
                    <Eye className="h-4 w-4" />
                  </IconButton>
                </div>
              </div>
            </section>

            <Divider variant="subtle" className="my-10" />

            {/* Section 5: Badges & Semantic Status */}
            <section className="space-y-6 my-12" aria-labelledby="section-badges">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                <Heading2 id="section-badges">Badges & Status Tokens</Heading2>
              </div>
              <Muted>
                Compact indicators for technology tags, status signals, and metadata.
              </Muted>

              <div className="flex flex-wrap gap-2.5">
                <Badge variant="accent">Accent</Badge>
                <Badge variant="default">Default</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="neutral">Neutral</Badge>
                <Badge variant="subtle">Subtle</Badge>
              </div>
            </section>

            <Divider variant="subtle" className="my-10" />

            {/* Section 6: Interactive Surfaces & Depth */}
            <section className="space-y-6 my-12" aria-labelledby="section-surfaces">
              <div className="flex items-center gap-2.5">
                <Layers className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                <Heading2 id="section-surfaces">Surfaces & Interactive Depth</Heading2>
              </div>
              <Muted>
                Cards and panels provide depth through subtle borders, background levels, and micro-hover states.
              </Muted>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Surface elevation="base" isInteractive padding="lg" className="space-y-3">
                  <Badge variant="neutral">Base Surface</Badge>
                  <Heading4>Subtle Interactive Card</Heading4>
                  <Paragraph className="text-xs text-neutral-400">
                    Hover to see subtle border illumination and elevation shift.
                  </Paragraph>
                </Surface>

                <Surface elevation="elevated" isInteractive padding="lg" className="space-y-3">
                  <Badge variant="accent">Elevated Surface</Badge>
                  <Heading4>Elevated Depth Card</Heading4>
                  <Paragraph className="text-xs text-neutral-400">
                    High-contrast container for spotlight and primary grouping.
                  </Paragraph>
                </Surface>

                <Surface elevation="glass" isInteractive padding="lg" className="space-y-3">
                  <Badge variant="subtle">Glass Surface</Badge>
                  <Heading4>Backdrop Glass Card</Heading4>
                  <Paragraph className="text-xs text-neutral-400">
                    Translucent overlay for floating panels and contextual popovers.
                  </Paragraph>
                </Surface>
              </div>
            </section>

            <Divider variant="gradient" className="my-12" />

            {/* Verification Footer Indicator */}
            <div className="text-center py-4 text-neutral-500 text-xs">
              PRATHAMFLIX — Phase 4 Navigation & Application Shell Verification • Ready for Review
            </div>
          </Container>
        </main>
      </AppShell>
    </>
  );
}
