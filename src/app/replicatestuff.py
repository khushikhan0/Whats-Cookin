import replicate

input = {
    "image": "https://replicate.delivery/pbxt/IJEPmgAlL2zNBNDoRRKFegTEcxnlRhoQxlNjPHSZEy0pSIKn/gg_bridge.jpeg",
    "question": "what body of water does this bridge cross?"
}

output = replicate.run(
    "andreasjansson/blip-2:f677695e5e89f8b236e52ecd1d3f01beb44c34606419bcc19345e046d8f786f9",
    input=input
)
print(output)
#=> "san francisco bay" 