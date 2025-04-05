# WP Bewertungen

Ein einfaches WordPress-Plugin zum Verwalten von Bewertungen, die von Benutzern über ein Formular auf Ihrer Website abgegeben wurden und an anderer Stelle angezeigt werden können.

## Funktionen

- **Benutzerbewertungen**: Ermöglicht es Benutzern, Bewertungen mit Namen, E-Mail und Nachricht abzugeben
- **Administration**: Einfache Verwaltung aller Bewertungen über das WordPress-Admin-Panel
- **Bewertungsantworten**: Administratoren können auf Bewertungen mit Text und Bildern antworten
- **Sichtbarkeitssteuerung**: Ein- und Ausblenden von Bewertungen (anzeigen/verbergen)
- **Shortcode-Integration**: Anzeigen von Bewertungen und dem Bewertungsformular überall auf Ihrer Website mit Shortcodes
- **Responsives Design**: Funktioniert gut auf allen Geräten

## Installation

1. Laden Sie die Plugin-Dateien mit "Code" > "Download ZIP" herunter
2. Öffnen Sie Ihr WordPress-Admin-Panel, gehen Sie zum Menü "Plugins" > "Neu hinzufügen" > "Plugin hochladen" > "Datei auswählen"
3. Wählen Sie Ihre heruntergeladene ZIP-Datei aus
4. Aktivieren Sie das Plugin über das "Plugins"-Menü in WordPress

## Verwendung

### Anzeigen des Bewertungsformulars

Um das Formular zur Bewertungsabgabe auf Ihrer Website anzuzeigen, verwenden Sie den folgenden Shortcode:

```
[bewertungen_formular]
```

Dies zeigt ein Formular an, in dem Benutzer ihre Bewertungen abgeben können.

### Anzeigen von Bewertungen

Um die veröffentlichten Bewertungen auf Ihrer Website anzuzeigen, verwenden Sie den folgenden Shortcode:

```
[show_reviews]
```

Dies zeigt alle Bewertungen an, die im Admin-Panel als sichtbar markiert wurden.

### Bewertungen verwalten

1. Gehen Sie zum WordPress-Admin-Panel
2. Klicken Sie auf "Bewertungen" im Admin-Menü
3. Hier können Sie:
   - Alle eingereichten Bewertungen anzeigen
   - Bewertungsdetails bearbeiten
   - Sichtbarkeit von Bewertungen umschalten
   - Auf Bewertungen mit Text und Bildern antworten
   - Bewertungen löschen

## Anpassung

Das Plugin verwendet Standard-WordPress-Stile, die mit dem CSS Ihres Themes angepasst werden können. Die wichtigsten verwendeten CSS-Klassen sind:

- `.fs-form` - Das Bewertungsformular
- `.fs-out` - Der Container für angezeigte Bewertungen
- `.fs-box` - Einzelne Bewertungsanzeige
- `.fs-antwort` - Bereich für Administratorantworten

## Anforderungen

- WordPress 5.2 oder höher
- PHP 7.2 oder höher

## Credits

Original von [Flonik](https://flonik.de)
