import sys

# ----------- read input buffer ----------- #
# this taked stdin and converts it to a string
input_string =  "".join(map(chr, sys.stdin.buffer.read())) 

print('---- START LOG FROM PYTHON ----');
print(input_string);
print('---- END LOG FROM PYTHON   ----');

sys.stdout.write('foobar');