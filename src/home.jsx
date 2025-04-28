import React from "react";
import {
  FaGithub,
  FaTools,
  FaCode,
  FaUpload,
  FaLock,
  FaPaperPlane,
  FaDatabase,
  FaNetworkWired,
  FaTerminal,
} from "react-icons/fa";
import "./home.css";
import { RiTwitterXFill } from "react-icons/ri";

export const App = () => {
  return (
    <div className="page-container">
      <header className="header">
        <div className="header-info">
          <span className="title">BYTE-TO-SOUL</span>
          <span className="status">CPU: x86_64 | MEMORY: 16 KB</span>
        </div>
        <div className="intro">
          <h1>Welcome to our journey with Token Assembler </h1>
          <p>
            A tribute to low-level programming mastery. Explore how we deployed
            a token entirely in raw assembly language.
          </p>
        </div>
      </header>

      <section className="section">
        <h2>
          <u>
            <FaGithub /> Resources
          </u>
        </h2>
        <p>
          Find the complete assembly script and detailed instructions on our
          GitHub repository.
        </p>
      </section>

      <section className="section">
        <h2>
          <FaTools /> Future Tools
        </h2>
        <p>
          We are building a deployer tool that will allow you to create your own
          tokens in raw assembly language. Sign up to the whitelist to be part
          of the action!
        </p>
        <p>Stay tuned!</p>
        <button className="btn">Deploy Token</button>
      </section>

      <section className="section">
        <h2>
          <FaCode /> Documentation
        </h2>
        <p>
          Here’s how we generated a Solana wallet using a low-level
          assembly-inspired approach:
        </p>

        <h3>Step 1: Tools and Libraries</h3>
        <ul>
          <li>Libsodium: A cryptography library for key pair generation.</li>
          <li>MinGW-w64: GCC compiler for Windows.</li>
          <li>7-Zip: For extracting compressed files.</li>
        </ul>

        <h3>Step 2: Extracting and Setting Up</h3>
        <p>
          We extracted the downloaded files into our Documents folder and
          ensured the paths were set correctly in our environment variables.
        </p>

        <h3>Step 3: Writing the Code</h3>
        <div className="code-block">
          <pre>{`// Generates a key pair using libsodium
#include <sodium.h>
#include <stdio.h>

int main() {
  if (sodium_init() == -1) return 1;
  unsigned char seed[crypto_sign_SEEDBYTES];
  randombytes_buf(seed, sizeof(seed));
  unsigned char pk[crypto_sign_PUBLICKEYBYTES];
  unsigned char sk[crypto_sign_SECRETKEYBYTES];
  crypto_sign_seed_keypair(pk, sk, seed);
  printf("Public Key: ");
  for (int i = 0; i < crypto_sign_PUBLICKEYBYTES; i++) printf("%02x", pk[i]);
  printf("\nPrivate Key: ");
  for (int i = 0; i < crypto_sign_SECRETKEYBYTES; i++) printf("%02x", sk[i]);
  printf("\n");
  return 0;
}`}</pre>
        </div>

        <h3>Step 4: Compiling the Code</h3>
        <div className="code-block">
          <pre>{`gcc -o generate_wallet generate_wallet.c -IC:\n\nlibsodium\n\ninclude -LC:\n\nlibsodium\n\nlib -lsodium`}</pre>
        </div>

        <h3>Step 5: Running the Program</h3>
        <p>
          We ran the compiled executable and retrieved public/private keypairs
          printed to the console.
        </p>

        <h3>
          <FaUpload /> Generating and Uploading Token Metadata
        </h3>
        <p>
          This step uses assembly and CURL bindings to send token info to the
          pump.fun IPFS service.
        </p>

        <h3>
          <FaDatabase /> Metadata JSON Example
        </h3>
        <div className="code-block">
          <pre>{`{
  "name": "MyToken",
  "symbol": "MTK",
  "description": "My custom token",
  "website": "https://mytoken.io",
  "twitter": "https://twitter.com/MyToken"
}`}</pre>
        </div>

        <h3>Step 6: Sending Transaction Details</h3>
        <p>
          We passed metadata URI to PumpPortal.fun for transaction creation.
        </p>

        <h3>
          <FaLock /> Step 7: Signing the Transaction Locally
        </h3>
        <p>
          To sign the Base58 encoded transaction, we built a Rust DLL and called
          it from a C script for cryptographic operations.
        </p>

        <h3>
          <FaTerminal /> C + Rust Invocation
        </h3>
        <div className="code-block">
          <pre>{`// signer.c calls rust DLL
void send_transactions() {
  // bridge logic from C to Rust
}`}</pre>
        </div>

        <h3>
          <FaPaperPlane /> Step 8: Submitting to Jito API
        </h3>
        <p>Finalized transactions are submitted to Jito’s bundle endpoint.</p>
        <div className="code-block">
          <pre>{`curl -X POST https://mainnet.block-engine.jito.wtf/api/v1/bundles \n
-H "Content-Type: application/json" \n
-d '{"jsonrpc":"2.0","id":1,"method":"sendBundle","params":[["3B98p3...SignedTransactionEncoded"]]}'`}</pre>
        </div>
      </section>

      <section className="section">
        <h2>
          <FaTools /> Tools
        </h2>
        <p>
          We are building a set of tools to make low-level programming easier
          and more accessible. Check out our GitHub for the latest updates.
        </p>
        <div className="code-block">
          <pre>{`// Example tool: Assembly code generator
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sodium.h>
#include <curl/curl.h>
#include <json-c/json.h>
#include <openssl/sha.h>
#include <openssl/ripemd.h>
#include <openssl/evp.h>
#include <openssl/pem.h>
#include <openssl/rsa.h>
#include <openssl/x509.h>
#include <openssl/err.h>
#include <openssl/bio.h>
#include <openssl/buffer.h>
#include <openssl/objects.h>
#include <openssl/engine.h>
#include <openssl/crypto.h>
#include <openssl/ssl.h>
#include <openssl/err.h>
#include <openssl/sha.h>
#include <openssl/ripemd.h>
#include <openssl/evp.h>
#include <openssl/pem.h>
#include <openssl/rsa.h>
#include <openssl/x509.h>
#include <openssl/err.h>
#include <openssl/bio.h>
#include <openssl/buffer.h>

#include <openssl/objects.h>
#include <openssl/engine.h>
#include <openssl/crypto.h>
#include <openssl/ssl.h>

// Example function to generate a key pair
void generate_key_pair() {
  unsigned char seed[crypto_sign_SEEDBYTES];
  randombytes_buf(seed, sizeof(seed));
  unsigned char pk[crypto_sign_PUBLICKEYBYTES];
  unsigned char sk[crypto_sign_SECRETKEYBYTES];
  crypto_sign_seed_keypair(pk, sk, seed);
  printf("Public Key: ");
  for (int i = 0; i < crypto_sign_PUBLICKEYBYTES; i++) printf("%02x", pk[i]);
  printf("\\nPrivate Key: ");
  for (int i = 0; i < crypto_sign_SECRETKEYBYTES; i++) printf("%02x", sk[i]);
  printf("\\n");
  return 0;
}`}</pre>
        </div>
        <button className="btn">Explore Tools</button>
        <h2>
          <FaNetworkWired /> Network
        </h2>
        <p>
          We are building a network of developers and enthusiasts who share our
          passion for low-level programming. Join us on Discord and Twitter to
          connect with like-minded individuals.
        </p>
        <div className="btns">
          <button className="btn">
            Follow <RiTwitterXFill />
          </button>
          <button className="btn">Join the Network</button>
        </div>
      </section>

      <footer className="footer">
        © 2025 Token Assembler . Forged from bare metal.
      </footer>
    </div>
  );
};
