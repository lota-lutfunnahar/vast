{
  description = "Flake utils demo";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/db6e089456cdddcd7e2c1d8dac37a505c797e8fa";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    let systems = [
      "aarch64-darwin"
      "aarch64-linux"
      "x86_64-darwin"
      "x86_64-linux"
    ]; in
    flake-utils.lib.eachSystem systems (system:
      let pkgs = import nixpkgs { inherit system; overlays = [ (import ./nix/overlay.nix) ]; }; in
      rec {
        overlay = ./nix/overlay.nix;
        packages = flake-utils.lib.flattenTree {
          vast = pkgs.vast;
        };
        defaultPackage = packages.vast;
        apps.vast = flake-utils.lib.mkApp { drv = packages.vast; };
        defaultApp = apps.vast;
      }
    );
}
