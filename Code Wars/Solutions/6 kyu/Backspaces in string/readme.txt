=========================Notes=========================
Moderatly easy the only trick was the array changing
size as the hashtages and prevous characters were
removed. This was solved by using a for loop instead
of a forEach method.
=========================Notes=========================
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""