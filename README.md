# Landing — nakonechnik.fun

Minimal static page: brand, join address, Telegram, donate, project stubs.

## Config

`config.js`:

- `playHost` — join address (default `play.nakonechnik.fun:7777`)
- `telegram` — channel URL
- `donate` — DonationAlerts URL

## Deploy

Public Pages repo: push `site/` contents to [Nakonechnik/nakonechnik-fun](https://github.com/Nakonechnik/nakonechnik-fun).

Home nginx backup (port **8080**):

```powershell
python scripts\deploy-site-home.py
```
