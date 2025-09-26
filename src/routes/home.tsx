import { useCallback, useEffect, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Boxes,
  Server,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Wifi,
} from "lucide-react";

import { AnimatedSection } from "@/components/animations/animated-section";
import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ChartCard } from "@/components/ui/chart-card";
import { Container } from "@/components/ui/container";
import heroVisual from "@/assets/hero-media/hero-visual.png";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const heroContainer = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.05, ease: easing },
  },
};

const heroItem = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } },
};

type ProductShowcase = {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: string;
  demoHref: string;
  details?: string;
};

type HeroSectionProps = {
  onExploreClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  onHeroVisualClick?: () => void;
};

const productShowcase: ProductShowcase[] = [
  {
    name: "IntoStock",
    tagline: "Inventory management",
    description:
      "Unify warehouses, storefronts, and marketplaces with real-time stock visibility and predictive replenishment.",
    icon: Boxes,
    status: "AVAILABLE NOW",
    demoHref: "/contact?product=IntoStock",
    details:
      "Bring SKU accuracy, demand planning, and automated replenishment into a single platform. IntoStock connects your marketplaces and warehouses with predictive insights so your teams stay ahead of every purchase order.",
  },
  {
    name: "IntoShop",
    tagline: "E-commerce",
    description:
      "Launch compliant storefronts, checkouts, and fulfillment flows faster with modular commerce tooling.",
    icon: ShoppingBag,
    status: "AVAILABLE NOW",
    demoHref: "/contact?product=IntoShop",
    details:
      "Spin up conversion-optimized storefronts with modular checkout, localized pricing, and integrated fulfillment. IntoShop lets you move from concept to omni-channel launch in weeks, not quarters.",
  },
  {
    name: "IntoPing",
    tagline: "ISP management",
    description:
      "Provision, monitor, and bill network services through a single console with automated SLA alerts.",
    icon: Wifi,
    status: "AVAILABLE NOW",
    demoHref: "/contact?product=IntoPing",
    details:
      "Centralize provisioning, network monitoring, and billing into one source of truth. IntoPing keeps your operations team informed with automated SLA alerts and deep analytics on subscriber health.",
  },
  {
    name: "IntoPocket",
    tagline: "Life companion app",
    description:
      "Handle everyday finances, errands, and shared routines with secure, personalized mobile experiences.",
    icon: Smartphone,
    status: "AVAILABLE NOW",
    demoHref: "/contact?product=IntoPocket",
    details:
      "Deliver a unified companion for personal finance, daily planning, and family coordination. IntoPocket blends security with delightful UX so your users keep coming back every day.",
  },
  {
    name: "IntoHost",
    tagline: "Managed hosting",
    description: "Your favorite hosting service at best price.",
    icon: Server,
    status: "COMING SOON",
    demoHref: "/contact?product=IntoHost",
    details:
      "IntoHost pairs high-availability infrastructure with transparent pricing and hands-on support. Autoscaling, edge caching, and zero-downtime deploys keep your workloads fast while we handle the ops.",
  },
];

const velocityData = [
  { sprint: "Q1 '23", velocity: 64 },
  { sprint: "Q2 '23", velocity: 72 },
  { sprint: "Q3 '23", velocity: 86 },
  { sprint: "Q4 '23", velocity: 94 },
  { sprint: "Q1 '24", velocity: 101 },
  { sprint: "Q2 '24", velocity: 110 },
];

const uptimeData = [
  { month: "Mar", uptime: 99.4 },
  { month: "Apr", uptime: 99.6 },
  { month: "May", uptime: 99.7 },
  { month: "Jun", uptime: 99.8 },
  { month: "Jul", uptime: 99.9 },
];

const adoptionData = [
  { name: "Platform", value: 42 },
  { name: "Commerce", value: 26 },
  { name: "Operations", value: 18 },
  { name: "Everyday", value: 14 },
];

const BRAND_COLORS = [
  "#3865ff",
  "#34d39f",
  "#f59e0b",
  "#c084fc",
];

const tooltipStyles = {
  borderRadius: 16,
  border: "1px solid rgba(148, 163, 184, 0.25)",
  backgroundColor: "rgba(15, 23, 42, 0.9)",
  color: "white",
  padding: "0.75rem 1rem",
  boxShadow: "0 12px 40px rgba(15, 23, 42, 0.25)",
};

function HeroSection({ onExploreClick, onHeroVisualClick }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 hidden bg-hero-mesh opacity-40 blur-3xl dark:block dark:opacity-60"
        aria-hidden
      />
      <Container className="relative z-10 grid items-start gap-6 pb-8 pt-2 sm:gap-12 sm:pb-12 sm:pt-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20 lg:pb-20 lg:pt-16">
        <motion.div
          variants={heroContainer}
          initial="initial"
          animate="animate"
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          <motion.div variants={heroItem}>
            <Badge
              variant="brand"
              size="md"
              className="flex w-fit items-center gap-2 border-brand-300/60 bg-brand-500/10 text-brand-600 shadow-sm dark:border-brand-500/30 dark:bg-brand-500/15 dark:text-brand-100"
            >
              <Sparkles className="h-4 w-4" /> Full-spectrum delivery partner
            </Badge>
          </motion.div>
          <motion.h1
            variants={heroItem}
            className="text-slate-900 font-display text-[1.9rem] font-semibold leading-tight tracking-tight dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            intovah: On the Verge of Innovation
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="text-slate-600 max-w-2xl text-base leading-relaxed dark:text-white/70 sm:text-lg md:text-xl"
          >
            At Intovah, we don&apos;t just follow trends; we create them. Let&apos;s redefine what your business can
            achieve together.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              to={{ pathname: "/", hash: "#our-products" }}
              onClick={onExploreClick}
              className={buttonVariants({
                variant: "primary",
                size: "lg",
                className: "w-full rounded-2xl px-8 shadow-brand sm:w-auto",
              })}
            >
              Explore our products
            </Link>
            <Link
              to="/contact"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className:
                  "border-slate-300 w-full rounded-2xl px-8 text-brand-700 transition-colors duration-300 hover:border-brand-400 hover:text-brand-500 dark:border-white/20 dark:text-white sm:w-auto",
              })}
            >
              Contact us
            </Link>
          </motion.div>
        </motion.div>

        <motion.button
          type="button"
          onClick={onHeroVisualClick}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: easing, delay: 0.25 }}
          className="relative mt-8 w-full max-w-xl cursor-pointer overflow-hidden rounded-4xl border border-white/10 bg-white/70 shadow-xl backdrop-blur-2xl transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:mt-10 sm:max-w-2xl lg:mt-0 lg:max-w-none lg:justify-self-end dark:border-white/15 dark:bg-white/10 dark:shadow-glass dark:focus-visible:ring-brand-400/40 dark:focus-visible:ring-offset-slate-950"
          aria-label="View our products"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 via-white/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent" />
          <img
            src={heroVisual}
            alt="Network of Intovah products connecting through a luminescent globe"
            className="relative z-[1] h-full w-full object-cover"
            loading="lazy"
          />
        </motion.button>
      </Container>
    </section>
  );
}

function ProductShowcaseSection() {
  return (
    <section id="our-products" className="relative">
      <AnimatedSection className="py-4">
        <Container className="space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center md:max-w-none md:text-left">
            <Badge
              variant="brand"
              className="mx-auto w-fit text-brand-600 dark:text-brand-100 md:mx-0"
            >
              Product ecosystem
            </Badge>
            <h2 className="text-slate-900 font-display text-4xl font-semibold tracking-tight dark:text-white md:text-[2.75rem]">
              Our products
            </h2>
            <p className="text-slate-600 text-lg dark:text-white/70">
              From inventory to everyday life, Intovah products connect your teams with the tooling they need to move quickly without losing control.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productShowcase.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </Container>
      </AnimatedSection>
    </section>
  );
}

type ProductCardProps = {
  product: ProductShowcase;
};

function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <motion.div
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 text-left text-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/10 dark:text-white"
      whileHover={{ y: -6 }}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/20 dark:text-brand-100 dark:group-hover:bg-brand-500">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-5 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500 dark:text-brand-200">
          {product.tagline.toUpperCase()}
        </p>
        <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{product.name}</h3>
        <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-white/70">
          {product.description}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <span
          className={`text-xs font-semibold uppercase tracking-[0.3em] ${
            product.status === "COMING SOON"
              ? "text-amber-500 dark:text-amber-300"
              : "text-emerald-500 dark:text-emerald-200"
          }`}
        >
          {product.status}
        </span>
        <Link
          to={product.demoHref}
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
            className:
              "flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-brand-400 hover:bg-brand-500 hover:text-white dark:border-white/20",
          })}
        >
          <span>Check out demo</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function InsightsSection() {
  return (
    <section className="relative">
      <Container className="space-y-12">
        <AnimatedSection className="mx-auto max-w-3xl space-y-4 text-center md:max-w-none md:text-left">
          <Badge
            variant="neutral"
            className="text-slate-600 mx-auto w-fit dark:text-white/70 md:mx-0"
          >
            Delivery intelligence
          </Badge>
          <h2 className="text-slate-900 font-display text-4xl font-semibold tracking-tight dark:text-white md:text-[2.75rem]">
            Visibility from sprint reviews to board reports
          </h2>
          <p className="text-slate-600 text-lg dark:text-white/70">
            We wire in the telemetry that matters—velocity, reliability,
            adoption—so you can move fast without losing governance.
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ChartCard
            title="Delivery velocity"
            description="Story points completed per quarter across flagship squads."
          >
            <div className="text-slate-400 h-full dark:text-white/60">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={velocityData}
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="rgba(148, 163, 184, 0.2)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="sprint"
                    tick={{ fill: "currentColor", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "currentColor", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{
                      stroke: "rgba(56, 101, 255, 0.35)",
                      strokeWidth: 2,
                    }}
                    contentStyle={tooltipStyles}
                  />
                  <Line
                    type="monotone"
                    dataKey="velocity"
                    stroke="#3865ff"
                    strokeWidth={3}
                    dot={{ strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard
            title="Platform uptime"
            description="SLO adherence across critical services over the last four months."
          >
            <div className="text-slate-400 h-full dark:text-white/60">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={uptimeData}
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="uptimeGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#34d39f" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#34d39f"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    stroke="rgba(148, 163, 184, 0.18)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "currentColor", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "currentColor", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[99, "auto"]}
                  />
                  <Tooltip cursor={false} contentStyle={tooltipStyles} />
                  <Area
                    type="monotone"
                    dataKey="uptime"
                    stroke="#34d39f"
                    strokeWidth={3}
                    fill="url(#uptimeGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard
            title="Adoption mix"
            description="Share of flagship adoption across platform capabilities."
            className="md:col-span-2 xl:col-span-1"
          >
            <div className="text-slate-400 h-full dark:text-white/60">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={adoptionData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={94}
                    paddingAngle={4}
                    stroke="transparent"
                  >
                    {adoptionData.map((entry, index) => (
                      <Cell
                        key={entry.name}
                        fill={BRAND_COLORS[index % BRAND_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => `${value}%`}
                    contentStyle={tooltipStyles}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </AnimatedSection>
      </Container>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section>
      <AnimatedSection>
        <Container>
          <div className="border-slate-200 text-slate-900 relative overflow-hidden rounded-5xl border bg-white p-10 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-[#111833] dark:via-[#0b1124] dark:to-[#050915] dark:text-white dark:shadow-glass md:p-16">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div className="space-y-6">
                <Badge
                  variant="neutral"
                  className="text-slate-600 bg-white/80 dark:bg-white/20 dark:text-white/70"
                >
                  Ready when you are
                </Badge>
                <h2 className="font-display text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">
                  Build your next release with a squad that feels in-house from
                  day one
                </h2>
                <p className="text-slate-600 dark:text-white/80 md:text-lg">
                  Share your challenges, and we’ll co-create a roadmap with
                  breakout milestones, governance guardrails, and a team
                  composition tailored to your reality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className={buttonVariants({
                      variant: "primary",
                      size: "lg",
                      className: "rounded-2xl px-8 shadow-brand",
                    })}
                  >
                    Start the conversation
                  </Link>
                  <Link
                    to="/support"
                    className={buttonVariants({
                      variant: "secondary",
                      size: "lg",
                      className:
                        "border-slate-300 rounded-2xl px-8 text-brand-700 dark:border-white/20 dark:text-white",
                    })}
                  >
                    Speak with support
                  </Link>
                </div>
              </div>

              <div className="border-slate-200 text-slate-600 rounded-4xl border bg-white p-6 text-sm shadow-lg dark:border-white/20 dark:bg-black/30 dark:text-white/80">
                <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-[0.28em] dark:text-white/50">
                  What you get
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-500" />{" "}
                    Tailored delivery roadmap in 5 business days
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-500" /> Pod
                    composition with bios and availability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-500" /> Risk
                    register with mitigation plan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-500" />{" "}
                    Investment options aligned to outcomes
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="absolute -right-32 -top-24 h-72 w-72 rounded-full bg-white/40 blur-[160px] dark:bg-brand-500/25"
              aria-hidden
            />
          </div>
        </Container>
      </AnimatedSection>
    </section>
  );
}

export default function Home() {
  const location = useLocation();

  const scrollToHash = useCallback((hash: string) => {
    const targetId = hash.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const timeout = window.setTimeout(() => {
      scrollToHash(location.hash);
    }, 50);

    return () => window.clearTimeout(timeout);
  }, [location.hash, scrollToHash]);

  const goToProducts = useCallback(() => {
    scrollToHash("#our-products");
    window.history.replaceState(null, "", `${location.pathname}#our-products`);
  }, [location.pathname, scrollToHash]);

  const handleExploreClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (location.pathname !== "/") {
        return;
      }

      event.preventDefault();
      goToProducts();
    },
    [goToProducts, location.pathname],
  );

  const handleHeroVisualClick = useCallback(() => {
    if (location.pathname !== "/") {
      return;
    }

    goToProducts();
  }, [goToProducts, location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Intovah | Better digital delivery</title>
        <meta
          name="description"
          content="Intovah is the product studio helping teams ship faster with resilient platforms, guided telemetry, and full-spectrum delivery partners."
        />
      </Helmet>

      <div className="space-y-20 pb-16 pt-10 sm:space-y-24 sm:pt-14 lg:space-y-32">
        <HeroSection
          onExploreClick={handleExploreClick}
          onHeroVisualClick={handleHeroVisualClick}
        />
        <ProductShowcaseSection />
        <InsightsSection />
        <CallToActionSection />
      </div>
    </Layout>
  );
}
