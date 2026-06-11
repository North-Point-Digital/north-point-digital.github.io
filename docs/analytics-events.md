# Analytics events reference

_June 2026. Every Google event the site sends, and the account-side setup
needed before running paid campaigns. Site-side wiring is done and verified;
the "Your setup" section is the part only David can do._

## Conversion events (the ones that matter for campaigns)

| Event | Fires when | Where |
|---|---|---|
| `generate_lead` | A Calendly link is clicked (label "Calendly Booking Click"), or the playbook form succeeds (label "Playbook Download") | Sitewide / playbook page |
| `book_call_complete` | The thank-you page loads after a Calendly booking | /thank-you |
| `conversion` (Google Ads, `AW-17883979518/uoRQCMuWk…`) | Same moment as `book_call_complete` | /thank-you |
| `playbook_download` | MailerLite form success | /ai-adoption-playbook |

Funnel logic: `generate_lead` (click) is the leading indicator;
`book_call_complete` (confirmed booking) is the real one. Optimise campaigns
to the real one once volume allows.

## Engagement events

| Event | Detail |
|---|---|
| `cta_click` | Every button/CTA, with a distinct label per placement (Hero, Nav, Mobile Nav, Examples, Case Studies, Closing, Founding Slot, Blog Post, Thank You Playbook, Blog Index Playbook…) |
| `service_click` / `navigation_click` | Service cards and nav links, labelled |
| `section_view` | First view of each homepage section (30% visible) |
| `scroll_depth` | 25 / 50 / 75 / 100% |
| `engaged_time` | 30 / 60 / 120 / 300 seconds |
| `faq_open` | Per question, labelled with the question |
| `outbound_click` | Any external link |
| `contact_click` | mailto / tel links |
| `video_play` / `video_pause` / `video_complete` | About video |
| `article_read_time` / `article_scroll_depth` | Blog posts |

## How the plumbing behaves

- Analytics load **only on northpointdigital.com** — localhost and previews
  send nothing (events still appear in `window.dataLayer` for testing).
- **Consent Mode v2**: everything denied until the banner is accepted.
  `url_passthrough` and `ads_data_redaction` are enabled, so Google can still
  model ad conversions from declined visitors. Expect reported numbers to
  undercount real humans; modelled conversions top up in Google Ads.
- Two GA4 properties receive data: **G-CX6XEZX2R0** (hardcoded; receives ALL
  custom events above) and **G-BYJNRDRBTZ** (loaded by GTM; receives whatever
  the GTM container is configured for). Treat **G-CX6XEZX2R0 as the source of
  truth** unless you decide otherwise.

## Your setup checklist (in the Google interfaces)

1. **GA4 (G-CX6XEZX2R0) → Admin → Events**: mark as key events (conversions):
   `generate_lead`, `book_call_complete`, `playbook_download`.
2. **Calendly**: set the event confirmation page to redirect to
   `https://northpointdigital.com/thank-you` — without this,
   `book_call_complete` and the Ads conversion never fire. Do this for
   whichever event(s) you keep after the Calendly decision.
3. **Google Ads**: link the Ads account to GA4 (Admin → Product links), then
   either import the GA4 key events as conversions or keep using the
   hardcoded AW- tag on /thank-you. Pick ONE as the primary conversion so
   bidding doesn't double-count; recommend the thank-you booking.
4. **GTM (GTM-TM5PN5MJ)**: check what the container actually contains. If its
   GA4 tag (G-BYJNRDRBTZ) duplicates page views into the property you keep,
   remove or repoint it. Any non-Google tags added later need consent
   settings configured inside GTM.
5. **Validate on production** after the next deploy: GA4 Admin → DebugView,
   then on the live site click a Calendly link, submit the playbook form with
   a test email, and complete a test booking. All four conversion events
   should appear within seconds.

## Testing locally

Open any page in dev, interact, then in the console:
`window.dataLayer.filter(e => e[0] === 'event').map(e => e[1])`
Nothing is transmitted off localhost; the dataLayer shows what production
would send.
