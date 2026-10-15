/* ============ BLOG POST LIST (used by blog.html) ============
   Post bodies live in each blog-<slug>.html file. */
const CATS = {
 "web-design": {
  "label": "Web Design",
  "icon": "bi-window-stack"
 },
 "seo": {
  "label": "SEO",
  "icon": "bi-search"
 },
 "social-media": {
  "label": "Social Media",
  "icon": "bi-instagram"
 },
 "automation": {
  "label": "Automation",
  "icon": "bi-robot"
 },
 "growth": {
  "label": "Business Growth",
  "icon": "bi-graph-up-arrow"
 }
};
const POSTS = [
 {
  "id": 8,
  "cat": "automation",
  "title": "5 WhatsApp Automations Every Small Business Should Set Up",
  "date": "2026-10-12",
  "icon": "bi-whatsapp",
  "excerpt": "You do not need a big budget. These five flows save hours and stop enquiries slipping away.",
  "slug": "5-whatsapp-automations-every-small-business-should-set-up",
  "g": 0,
  "read": 2
 },
 {
  "id": 6,
  "cat": "social-media",
  "title": "A Simple 4-Pillar Content Plan for Instagram",
  "date": "2026-10-10",
  "icon": "bi-instagram",
  "excerpt": "Stop guessing what to post. Four pillars give you endless ideas and a consistent feed.",
  "slug": "a-simple-4-pillar-content-plan-for-instagram",
  "g": 2,
  "read": 2
 },
 {
  "id": 1,
  "cat": "web-design",
  "title": "7 Things Every Small-Business Website Needs to Convert Visitors",
  "date": "2026-10-08",
  "icon": "bi-layout-text-window",
  "excerpt": "A beautiful site is not enough. These seven basics turn visitors into enquiries.",
  "slug": "7-things-every-small-business-website-needs-to-convert-visitors",
  "g": 1,
  "read": 2
 },
 {
  "id": 3,
  "cat": "seo",
  "title": "Local SEO Checklist: Get Found on Google Maps",
  "date": "2026-10-02",
  "icon": "bi-geo-alt",
  "excerpt": "If customers search \"near me\", these steps decide whether they find you or a competitor.",
  "slug": "local-seo-checklist-get-found-on-google-maps",
  "g": 3,
  "read": 2
 },
 {
  "id": 9,
  "cat": "automation",
  "title": "How to Never Lose a Lead Again: Follow-Up Automation Basics",
  "date": "2026-09-30",
  "icon": "bi-arrow-repeat",
  "excerpt": "Most leads go cold because nobody replied fast enough. Automation fixes that.",
  "slug": "how-to-never-lose-a-lead-again-follow-up-automation-basics",
  "g": 1,
  "read": 2
 },
 {
  "id": 2,
  "cat": "web-design",
  "title": "How Long Does a Website Really Take? A Realistic Timeline",
  "date": "2026-09-24",
  "icon": "bi-calendar3",
  "excerpt": "Most delays come from content, not code. Here is what a typical project looks like week by week.",
  "slug": "how-long-does-a-website-really-take-a-realistic-timeline",
  "g": 2,
  "read": 2
 },
 {
  "id": 7,
  "cat": "social-media",
  "title": "Reels vs Carousels: What to Post and When",
  "date": "2026-09-18",
  "icon": "bi-collection-play",
  "excerpt": "Each format does a different job. Use reels to be discovered and carousels to be remembered.",
  "slug": "reels-vs-carousels-what-to-post-and-when",
  "g": 3,
  "read": 2
 },
 {
  "id": 4,
  "cat": "seo",
  "title": "SEO vs Google Ads: Which Should You Start With?",
  "date": "2026-09-12",
  "icon": "bi-bullseye",
  "excerpt": "Ads bring traffic fast but stop when the budget stops. SEO takes longer but compounds.",
  "slug": "seo-vs-google-ads-which-should-you-start-with",
  "g": 0,
  "read": 2
 },
 {
  "id": 11,
  "cat": "growth",
  "title": "How to Measure Marketing ROI Without Complicated Tools",
  "date": "2026-09-06",
  "icon": "bi-calculator",
  "excerpt": "You do not need a dashboard maze. A few honest numbers tell you what is working.",
  "slug": "how-to-measure-marketing-roi-without-complicated-tools",
  "g": 3,
  "read": 2
 },
 {
  "id": 5,
  "cat": "seo",
  "title": "How to Write SEO Content That Actually Reads Well",
  "date": "2026-08-28",
  "icon": "bi-pencil-square",
  "excerpt": "Ranking starts with answering the search better than anyone else, not stuffing keywords.",
  "slug": "how-to-write-seo-content-that-actually-reads-well",
  "g": 1,
  "read": 2
 },
 {
  "id": 10,
  "cat": "automation",
  "title": "Zapier vs Make vs n8n: Choosing an Automation Tool",
  "date": "2026-08-20",
  "icon": "bi-diagram-3",
  "excerpt": "All three connect your apps. The right pick depends on complexity, budget and who maintains it.",
  "slug": "zapier-vs-make-vs-n8n-choosing-an-automation-tool",
  "g": 2,
  "read": 2
 },
 {
  "id": 12,
  "cat": "growth",
  "title": "Freelance Marketer vs Agency: Which Is Right for You?",
  "date": "2026-08-12",
  "icon": "bi-people",
  "excerpt": "Neither is always better. It depends on your scope, budget and how much management you want.",
  "slug": "freelance-marketer-vs-agency-which-is-right-for-you",
  "g": 0,
  "read": 2
 }
];
