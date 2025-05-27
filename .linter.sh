#!/bin/bash
cd /tmp/kavia/workspace/code-generation/weatherpulse-125791-776e647a/main_container_for_weatherpulse
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

