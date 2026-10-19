# Changelog

## 1.0.1

### 🐛 Fixes

- Uptime was missing on recent Home Assistant versions, where the System Monitor "Last boot" sensor is now called "Uptime" (new translation key and `uptime` device class). Both forms are now recognized.

## 1.0.0

First release of the System Monitor cards for Home Assistant, built for the core [System Monitor integration](https://www.home-assistant.io/integrations/systemmonitor/).

| System Monitor Card | System Monitor Mini Card |
|---|---|
| ![system-monitor-card](https://raw.githubusercontent.com/juju35/ha-system-monitor-card/main/screenshots/card.png) | ![system-monitor-mini-card](https://raw.githubusercontent.com/juju35/ha-system-monitor-card/main/screenshots/mini-card.png) |

### ✨ Features

- **System Monitor Card** (`custom:system-monitor-card`): CPU, RAM, disk and CPU temperature gauges, uptime, load average, IP address, network download / upload, storage (mount points and swap) and monitored processes.
- **System Monitor Mini Card** (`custom:system-monitor-mini-card`): compact overview with CPU, RAM, disk, temperature, update status, network and uptime.
- **Automatic discovery** of the System Monitor entities through the entity registry: no entity to pick, works whatever the language of the installation.
- Home Assistant Core and OS versions in the header, with an orange badge when an update is available.
- **Visual editor** for both cards: title, sections to display, network interface and language.
- Orange / red colors when CPU, RAM, disk or temperature cross a threshold.
- Click any value to open its history (more-info dialog).
- Light and dark mode, English and French.
- Single file with no external dependency, the Home Assistant logo is embedded.

### 📦 Installation

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=juju35&repository=ha-system-monitor-card&category=plugin)

Open the link above (or add `https://github.com/juju35/ha-system-monitor-card` as a **Dashboard** custom repository in HACS), click **Download**, then reload your browser. Manual install: copy `system-monitor-card.js` from the assets below to `/config/www/` and add `/local/system-monitor-card.js` as a JavaScript Module resource.

### 🚀 Quick start

```yaml
type: custom:system-monitor-card
```

```yaml
type: custom:system-monitor-mini-card
```

All options are described in the [README](https://github.com/juju35/ha-system-monitor-card#configuration).
