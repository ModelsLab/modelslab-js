# ModelsLab JavaScript SDK

<p align="center">
  <img src="https://github.com/user-attachments/assets/bd1908c3-d59d-4902-8c79-bf48869c1109" alt="ModelsLab Logo" />
</p>
<div align="center">
  <a href="https://discord.com/invite/modelslab-1033301189254729748">
    <img src="https://img.shields.io/badge/Discord-Join%20Us-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord">
  </a>
  <a href="https://x.com/ModelsLabAI">
    <img src="https://img.shields.io/badge/X-@ModelsLabAI-000000?style=for-the-badge&logo=twitter&logoColor=white" alt="X/Twitter">
  </a>
  <a href="https://github.com/ModelsLab">
    <img src="https://img.shields.io/badge/GitHub-ModelsLab-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.npmjs.com/package/modelslab">
    <img src="https://img.shields.io/npm/dt/modelslab?style=for-the-badge&label=Downloads&color=green&labelColor=black" alt="NPM Downloads">
  </a>
</div>
--
The official JavaScript/TypeScript SDK for ModelsLab's powerful AI APIs. Generate images, create videos, clone voices, and more with just a few lines of code.

## 🚀 Quick Start

### Installation

```bash
npm install modelslab
```

### Basic Setup

```javascript
import { Client, Community } from "modelslab";

// Initialize the client with your API key
const client = new Client("your_api_key");

// Create API instances
const community = new Community(client.key);
```

### Your First AI Image

```javascript
const result = await community.textToImage({
  key: client.key,
  prompt: "A beautiful sunset over mountains",
  model_id: "flux",
  width: 512,
  height: 512,
  samples: 1,
});

console.log("Generated image:", result.output[0]);
```

## 📖 Complete Usage Guide

### 1. Getting Your API Key

1. Sign up at [ModelsLab](https://modelslab.com)
2. Get your API key from the dashboard
3. Set it as an environment variable (optional):

```bash
export API_KEY="your_api_key"
```

### 2. Initialize the Client

```javascript
// Method 1: Direct API key
const client = new Client("your_api_key");

// Method 2: Environment variable
const client = new Client(); // Reads from process.env.API_KEY

// Method 3: With custom settings
const client = new Client("your_api_key", 5, 10); // 5 retries, 10 second timeout
```

### 3. Available APIs

#### Community API (Image Generation)

```javascript
import { Community } from "modelslab";

const community = new Community(client.key);

// Text to Image
const image = await community.textToImage({
  key: client.key,
  prompt: "A futuristic city at night",
  model_id: "stable-diffusion-v1-5",
  width: 512,
  height: 512,
  samples: 1,
  num_inference_steps: 20,
  guidance_scale: 7.5,
});

// Image to Image
const imageToImage = await community.imageToImage({
  key: client.key,
  prompt: "A painting in Van Gogh style",
  init_image: "base64-encoded-image",
  model_id: "stable-diffusion-v1-5",
  strength: 0.8,
});

// Inpainting (Fill masked areas)
const inpainting = await community.inpainting({
  key: client.key,
  prompt: "A red car",
  init_image: "base64-encoded-image",
  mask_image: "base64-encoded-mask",
  model_id: "stable-diffusion-v1-5",
});

// ControlNet (Guided generation)
const controlnet = await community.controlnet({
  key: client.key,
  prompt: "A realistic portrait",
  controlnet_model: "canny",
  controlnet_conditioning_scale: 1.0,
  model_id: "stable-diffusion-v1-5",
});
```

#### Image Editing API

```javascript
import { ImageEditing } from "modelslab";

const imageEditing = new ImageEditing(client.key);

// Qwen Edit - Edit images using Qwen model
const qwenEdit = await imageEditing.qwenEdit({
  key: client.key,
  prompt: "Add a sunset in the background",
  init_image: ["https://example.com/image.jpg"],
  base64: false,
});

// Caption - Generate captions for images
const caption = await imageEditing.caption({
  key: client.key,
  init_image: "https://example.com/image.jpg",
  length: "normal", // "short", "normal", or "long"
  base64: false,
});

// Other image editing methods
const outpainting = await imageEditing.outpainting({...});
const backgroundRemover = await imageEditing.backgroundRemover({...});
const superResolution = await imageEditing.superResolution({...});
const fashion = await imageEditing.fashion({...});
const objectRemover = await imageEditing.objectRemover({...});
const facegen = await imageEditing.facegen({...});
const inpainting = await imageEditing.inpainting({...});
const headshot = await imageEditing.headshot({...});
const fluxHeadshot = await imageEditing.fluxHeadshot({...});
```

#### Video API

```javascript
import { Video } from "modelslab";

const video = new Video(client.key);

// Watermark Remover - Remove watermarks from videos
const watermarkRemoval = await video.watermarkRemover({
  key: client.key,
  init_video: "https://example.com/video.mp4",
});

// Other video methods
const textToVideo = await video.textToVideo({...});
const imageToVideo = await video.imageToVideo({...});
```

#### Interior API

```javascript
import { InteriorAPI } from "modelslab";

const interior = new InteriorAPI(client.key);

// Object Removal - Remove objects from room images
const objectRemoval = await interior.objectRemoval({
  key: client.key,
  init_image: "https://example.com/room.jpg",
  object_name: "chair",
  base64: false,
});

// Interior Mixer - Add objects from one image into another room
const interiorMixer = await interior.interiorMixer({
  key: client.key,
  init_image: "https://example.com/room.jpg",
  object_image: "https://example.com/furniture.jpg",
  prompt: "Add the furniture to the living room",
  width: 1280,
  height: 1280,
  num_inference_steps: 8,
  base64: false,
});

// Other interior methods
const interiorDesign = await interior.interior({...});
const roomDecorator = await interior.roomDecorator({...});
const floor = await interior.floor({...});
const scenario = await interior.scenario({...});
const exteriorRestorer = await interior.exteriorRestorer({...});
```

#### Other APIs

```javascript
import { Audio, DeepFake } from "modelslab";

// Audio/Voice APIs
const audio = new Audio(client.key);

// DeepFake APIs
const deepfake = new DeepFake(client.key);
```

### 4. Enterprise Features

For enterprise users with dedicated infrastructure:

```javascript
// Enable enterprise mode
const enterpriseCommunity = new Community(client.key, true);

// This uses https://modelslab.com/api/v1/enterprise/images/ endpoints
const result = await enterpriseCommunity.textToImage({
  key: client.key,
  prompt: "Enterprise AI image",
  model_id: "stable-diffusion-v1-5",
});
```

### 5. Handling Async Operations

ModelsLab APIs are asynchronous. Here's how to handle them:

```javascript
// Method 1: Async/Await
async function generateImage() {
  try {
    const result = await community.textToImage({
      key: client.key,
      prompt: "A beautiful landscape",
      model_id: "stable-diffusion-v1-5",
    });

    if (result.status === "success") {
      console.log("Image URL:", result.output[0]);
    } else {
      console.log("Still processing, request ID:", result.id);

      // Fetch the result later
      const finalResult = await community.fetch(result.id);
      console.log("Final result:", finalResult);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Method 2: Promises
community
  .textToImage({
    key: client.key,
    prompt: "A sunset",
    model_id: "stable-diffusion-v1-5",
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

### 6. TypeScript Support

The SDK is written in TypeScript and includes full type definitions:

```typescript
import { Client, Community, Text2Image } from "modelslab";

const client: Client = new Client("api-key");
const community: Community = new Community(client.key);

const request: Text2Image = {
  key: client.key,
  prompt: "A typed request",
  model_id: "stable-diffusion-v1-5",
  width: 512,
  height: 512,
};

const result = await community.textToImage(request);
```

## �️ Advanced Usage

### Custom Configuration

```javascript
// Custom retry and timeout settings
const client = new Client("api-key", 3, 30); // 3 retries, 30 second timeout

// Access client properties
console.log(client.baseUrl); // "https://modelslab.com/api/"
console.log(client.fetchRetry); // 3
console.log(client.fetchTimeout); // 30
```

### Error Handling

```javascript
try {
  const result = await community.textToImage({
    key: client.key,
    prompt: "Test image",
    model_id: "stable-diffusion-v1-5",
  });
} catch (error) {
  if (error.message.includes("API key")) {
    console.error("Invalid API key");
  } else if (error.message.includes("Network")) {
    console.error("Network error, please try again");
  } else {
    console.error("Unknown error:", error.message);
  }
}
```

### Fetching Results

```javascript
// Start generation
const initialResult = await community.textToImage({
  key: client.key,
  prompt: "Long processing image",
  model_id: "stable-diffusion-v1-5",
});

// If still processing, fetch later
if (initialResult.status !== "success") {
  console.log("Processing... Request ID:", initialResult.id);

  // Wait and fetch
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds
  const finalResult = await community.fetch(initialResult.id);

  if (finalResult.status === "success") {
    console.log("Image ready:", finalResult.output[0]);
  }
}
```

## 🎯 Common Use Cases

### 1. AI Art Generator

```javascript
async function generateArt(description, style) {
  const result = await community.textToImage({
    key: client.key,
    prompt: `${description} in ${style} style`,
    model_id: "stable-diffusion-v1-5",
    width: 512,
    height: 512,
    guidance_scale: 7.5,
    num_inference_steps: 20,
  });

  return result.output[0];
}

// Usage
const artUrl = await generateArt("a dragon", "anime");
```

### 2. Image Variation Generator

```javascript
async function createVariations(baseImage, newPrompt) {
  const result = await community.imageToImage({
    key: client.key,
    prompt: newPrompt,
    init_image: baseImage, // base64 encoded
    strength: 0.7,
    model_id: "stable-diffusion-v1-5",
  });

  return result.output;
}
```

### 3. Background Remover/Replacer

```javascript
async function replaceBackground(image, mask, newBackground) {
  const result = await community.inpainting({
    key: client.key,
    prompt: newBackground,
    init_image: image,
    mask_image: mask,
    model_id: "stable-diffusion-v1-5",
  });

  return result.output[0];
}
```

## 🔧 Testing

The package includes comprehensive tests:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run interactive demo
npm run test:demo

# Quick validation
npm run test:validate
```

## 📚 API Reference

For detailed API documentation, visit: [https://docs.modelslab.com](https://docs.modelslab.com)

### Available Models

Popular model IDs you can use:

- `stable-diffusion-v1-5`
- `stable-diffusion-xl-base-1.0`
- `deliberate-v2`
- `anything-v5`
- `realistic-vision-v1.3`

## ❗ Error Codes

Common errors and solutions:

| Error                  | Cause                  | Solution                                |
| ---------------------- | ---------------------- | --------------------------------------- |
| "API key is required"  | Missing API key        | Set API key in client initialization    |
| "Model not found"      | Invalid model_id       | Check available models in docs          |
| "Insufficient credits" | Not enough API credits | Add credits to your account             |
| "Rate limit exceeded"  | Too many requests      | Wait and retry with exponential backoff |

## 🤝 Support & Community

- **Documentation**: [https://docs.modelslab.com](https://docs.modelslab.com)
- **Discord**: [Join our community](https://discord.com/invite/modelslab-1033301189254729748)
- **Twitter**: [@ModelsLabAI](https://x.com/ModelsLabAI)
- **GitHub Issues**: [Report bugs](https://github.com/ModelsLab/modelslab-js/issues)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
