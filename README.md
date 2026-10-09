# Landing — nakonechnik.fun

Static one-page site for the hub.

## Edit links

`config.js`:

- `telegram` — TG channel / bugs topic
- `donate` — DonationAlerts / Boosty / etc.
- `playHost` — join address (default `play.nakonechnik.fun`)

## Deploy

Home nginx (backup, port **8080** because WAN :80 is blocked):

```powershell
python scripts\deploy-site-home.py
```

Open: `http://77.34.241.123:8080`

Preferred public URL: GitHub Pages + DNS at Reg.ru (see workflow `.github/workflows/pages.yml`).
