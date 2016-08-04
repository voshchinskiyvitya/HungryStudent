move /y "f:\Projects\HungryStudent\compiled\App.js" "f:\Projects\HungryStudent\site\"

xcopy f:\Projects\HungryStudent\src\*.* f:\Projects\HungryStudent\site\ /y /exclude:f:\Projects\HungryStudent\batch-files\excluded.txt
