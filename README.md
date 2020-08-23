# grey-matter 🧠
Grey-matter is a simple command line Deno app that helps with mental math.

Currently it only supports multiplication of randomly generated numbers. The range of numbers is [1,999].

## Features
- Randomly generates a multiplication problem
- Accepts your answer as input and will inform you if you got it right or not
- Logs the date of your activity
- Tells you your total correct, total incorrect, and accuracy as a %

## Installing Deno 

Using Shell (macOS and Linux):

```curl -fsSL https://deno.land/x/install/install.sh | sh```

Using PowerShell (Windows):

```iwr https://deno.land/x/install/install.ps1 -useb | iex```

Using Scoop (Windows):

```scoop install deno```

Using Chocolatey (Windows):

```choco install deno```

Using Homebrew (macOS):

```brew install deno```

Using Cargo (Windows, macOS, Linux):

```cargo install deno```

## Add Deno to your path

You will have to export the path to deno in your CLI

```export PATH={path/to/deno}:$PATH```

## Create a log text file

In order to record your progress you must create a log.txt file. 

## How to Run

In your CLI type the following: 

```deno run --allow-read --allow-write main.ts```

## Controls 

type ```quit``` at any time to exit the program.