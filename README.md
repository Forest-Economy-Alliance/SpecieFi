# Specifi

## Prerequisites

1. Node 12
2. Android Studio and Android SDK
3. Java JRE JDK 11 (`sudo apt install default-jre default-jdk`)

I am assuming that we already have 104 files (100 images + 4 images) with the following structure:

```
images
  ├── 1.jpg
  ├── 2.jpg
  ├── 3.jpg
  └── 4.jpg
  └── ...
  └── ...
  └── ...
  └── ...
  └── ...
  └── 97.jpg
  └── 98.jpg
  └── 99.jpg
  └── 100.jpg

recordings
  ├── blue.mp3
  ├── green.mp3
  ├── red.mp3
  └── yellow.mp3
```

## Process

Step 1. Copy the 4 mp3 files to the `android/app/src/main/res/raw/*.mp3` folder.
Step 2. Copy the 100 images to the `assets/images/*.jpg` folder.

Step 3.
