# OSDG Web

The latest iteration of the OSDG website (as of 2021).

Using Next.js with **Incremental Static Regeneration** to rebuild the page once a day on the server and cache the build. The cached webpages are then served to the user.

## To run

```
git clone https://github.com/OSDG-IIITH/osdg-web.git
cd osdg-web
npm i
npm run dev
```

Also, make a `.env.local` file at the root of the project. Add Mailgun credentials to it as:

```
MAILGUN_API_KEY=<API-KEY>
MAILGUN_DOMAIN=<DOMAIN>
```

## Caveats

1. Getting the Instagram API key from the Facebook Developer Portal is a huge pain, so the current solution is to webscrape the public osdg.iiith webpage on Instagram from the server and extract the data from the HTTP response. The problem with this is that if too many requests are made to Instagram subsequently, the IP address of the device is flagged and Instagram redirects to the Login webpage instead of the posts webpage. So even during development, visit the `/` route as few times as possible. As such the idea of Server Side Rendering has been replaced by Incremental Static Regeneration. If possible though, we'd like to use the Instagram Media API.

2. Ideally, we'd like to use `nodemailer` to send emails from the contact form. However, Outlook doesn't give `nodemailer` access to send emails, so we can't use that. The current solution is using an API based mail service called MailGun, however, it's not ideal to rely on the free tier forever. An alternate solution would be to set up a Gmail account for OSDG and use it's credentials with `nodemailer`.

3. Upcoming events section is hardcoded. Need to look at API based calender services for this.

## Current Progress

* Homepage is completed (except upcoming events is hardcoded).

## Contribution Guidelines

Fork the project and work on the branch of the page you are editing. Once done, make a pull request to the branch for that page. **Don't make a PR to master**.
