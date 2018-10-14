initSidebarItems({"constant":[["KEYBYTES","Number of bytes in a `Key`."],["NONCEBYTES","Number of bytes in a `Nonce`."]],"fn":[["gen_key","`gen_key()` randomly generates a key for symmetric encryption"],["gen_nonce","`gen_nonce()` randomly generates a nonce for symmetric encryption"],["stream","`stream()` produces a `len`-byte stream `c` as a function of a secret key `k` and a nonce `n`."],["stream_xor","`stream_xor()` encrypts a message `m` using a secret key `k` and a nonce `n`. The `stream_xor()` function returns the ciphertext `c`."],["stream_xor_ic","`stream_xor_ic()` encrypts a message `m` using a secret key `k` and a nonce `n`, it is similar to `stream_xor()` but allows the caller to set the value of the initial block counter `ic`."],["stream_xor_ic_inplace","`stream_xor_ic_inplace()` encrypts a message `m` using a secret key `k` and a nonce `n`, it is similar to `stream_xor_inplace()` but allows the caller to set the value of the initial block counter `ic`. The `stream_xor_ic_inplace()` function encrypts the message in place."],["stream_xor_inplace","`stream_xor_inplace()` encrypts a message `m` using a secret key `k` and a nonce `n`. The `stream_xor_inplace()` function encrypts the message in place."]],"struct":[["Key","`Key` for symmetric encryption"],["Nonce","`Nonce` for symmetric encryption"]]});