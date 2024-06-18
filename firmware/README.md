#### Meshtastic device details
```
LILYGO TTGO T-Beam V1.1 using ESP32 chip.
```

### Flash the firmware onto your device using the webclient.
```
Device --> T-Beam
Firmware version --> 2.3.11.2740a56
```

#### Install Meshtastic CLI
```
pip install meshtastic
```

#### Export the yml file on to the meshtastic device
```
meshtastic --export-config > <Your_yml_file>
```

#### Configure the yml file on the device and ensure device reboots
```
meshtastic --configure <Your_yml_file>
```


