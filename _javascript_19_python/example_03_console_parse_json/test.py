import sys
import json

# ----------- read input buffer ----------- #
# this taked stdin and converts it to a string
input_string =  "".join(map(chr, sys.stdin.buffer.read())) 


# ----------- convert input_str to PYTHON DICTIONARY ----------- #
input_json      = json.loads(input_string)


print('---- START LOG FROM PYTHON ----');
print(input_string)                    # log the original input string
print(input_json[0])                   # log the 0th element of our input dictionary
print(input_json[2]['Pennsylvania'])   # log the penn. key of the 2nd element of our input dictionary
print('---- END LOG FROM PYTHON   ----');


# ----------- prepare data for output ----------- #

# recall that we cannot pass binary data back and forth. 
#  - Here is a way to convert out output (12.1 in this case) back to a string

output_value = 12.1                      # arbitrary output
out_data     = json.dumps(output_value)  # stringified for output

sys.stdout.write(out_data)               # write back to node