import sys
import json

# read input buffer
input_string = "".join(map(chr, sys.stdin.buffer.read()))

input_json      = json.loads(input_string)
reversed_string = input_json[::-1]

# our python operation
out = "The reversed version of {} is {}, courtesy of python!!".format(input_json, reversed_string)

# output back to node
sys.stdout.write(out);