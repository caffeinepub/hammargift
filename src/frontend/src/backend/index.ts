// Auto-generated backend stub
import type { ActorConfig } from "@dfinity/agent";
import type { Identity } from "@icp-sdk/core/agent";

export interface backendInterface {
  [key: string]: (...args: unknown[]) => Promise<unknown>;
}

export interface CreateActorOptions {
  agentOptions?: {
    identity?: Identity | Promise<Identity>;
    host?: string;
  };
  actorOptions?: ActorConfig;
}

export class ExternalBlob {
  constructor(
    private _bytes: Uint8Array = new Uint8Array(),
    public onProgress?: (progress: number) => void,
  ) {}

  static fromURL(_url: string): ExternalBlob {
    return new ExternalBlob();
  }

  async getBytes(): Promise<Uint8Array> {
    return this._bytes;
  }
}

export function createActor(
  _canisterId: string,
  _uploadFile: (_file: ExternalBlob) => Promise<Uint8Array>,
  _downloadFile: (_bytes: Uint8Array) => Promise<ExternalBlob>,
  _options?: CreateActorOptions,
): backendInterface {
  return {};
}
