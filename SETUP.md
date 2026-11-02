# Daily Hanzi setup

Site: https://markusng.github.io/daily-hanzi/
Calendar feed: https://markusng.github.io/daily-hanzi/daily-hanzi.ics

## 1. Publish the site (once)
1. On github.com, create a new **public** repository named `daily-hanzi`. Leave it empty: no README, licence or .gitignore.
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/markusng/daily-hanzi.git
   git push -u origin main
   ```
3. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Open the **Actions** tab. When "Deploy to GitHub Pages" turns green (about a minute), the site and calendar feed are live.
   - If the first run failed because Pages wasn't switched on yet, click **Re-run jobs**.

Every later push rebuilds the site and the calendar feed automatically.

## 2. Daily email at 7 am (Google Apps Script, once)
1. Build the script: `node tools/export.js && node tools/make-apps-script.js`. This writes `build/apps-script/Code.gs`.
2. Go to https://script.google.com and click **New project**. Rename it "Daily Hanzi".
3. Delete the sample code in `Code.gs`. Paste the whole contents of `build/apps-script/Code.gs` (about 570 KB), then press **Ctrl+S**.
4. Click **Project Settings** (gear icon) and set **Time zone** to yours.
5. Back in **Editor**, choose `install` in the function menu on the toolbar, then click **Run**.
   - Click **Review permissions** and pick your Google account.
   - Google will warn that it "hasn't verified this app". This is your own script, so click **Advanced → Go to Daily Hanzi (unsafe)**.
   - Click **Allow** to let it send email as you.
   - The log shows "Daily Hanzi will email … every day between 7 and 8 am".
6. Optional: run `sendTestWeekday`, `sendTestSaturday` or `sendTestSunday` to get a sample email now. You can also run `sendToday` to get today's email.

To stop the emails, run `uninstall`.

If the words or schedule change, rebuild `Code.gs`, paste it in again and save. The trigger stays in place.

## 3. Calendar (once per calendar app)
- **Google Calendar** (on a computer at calendar.google.com):
  1. Click **+** next to "Other calendars", then **From URL**.
  2. Paste the feed URL and click **Add calendar**.
  3. The calendar then shows on your phone too.
- **Outlook.com / new Outlook**:
  1. Go to **Calendar → Add calendar → Subscribe from web**.
  2. Paste the feed URL, name it "Daily Hanzi" and click **Import**.
- **Classic Outlook for Windows**: **Home → Add Calendar → From Internet**, then paste the feed URL.

Subscribed calendars refresh on their own, usually within 12–24 hours of a change.
