import sys
import json

# read input buffer
input_string = "".join(map(chr, sys.stdin.buffer.read()))
# print(input_string)
input_json   = json.loads(input_string)

out = "Hello to you, {}, from python!!".format(input_json['user'])

# write output 
sys.stdout.write(out);