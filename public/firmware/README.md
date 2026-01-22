# Firmware Files

Place the firmware binaries for the web flasher in this folder:

- M5Stick_Tally.bin
- M5Stick_Tally_Plus2.bin
- ESP32-1732S019.bin

These filenames must match exactly. Files in `public/firmware/` are served at:

- /firmware/M5Stick_Tally.bin
- /firmware/M5Stick_Tally_Plus2.bin
- /firmware/ESP32-1732S019.bin

Notes:
- Ensure the binaries are the correct builds for each device.
- Large files are fine; they will be streamed by the browser.
- After adding files, redeploy the site so the flasher can fetch them.
