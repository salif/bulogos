#!/usr/bin/env -S just -f

_:
	@just --list

[private]
add-b file:
	if test -f "{{file}}"; then \
		mv "{{file}}" "./.ignore/b/{{file}}"; else \
		echo "този файл не съществува"; fi
