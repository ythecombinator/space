import { FunctionComponent } from 'react';
import { tailwind } from '@theme-ui/presets';
import { useColorMode } from 'theme-ui';

const { gray } = tailwind.colors;

const Logo: FunctionComponent = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 261 27"
      width="261"
      height="27"
    >
      <g fill={isDark ? gray[1] : gray[9]}>
        <path d="M43.476 26l7.387-20.788h-3.957l-3.43 11.126h-.118L40.031 5.212H36l5.526 15.591-.747 2.24h-3.84V26h6.537zm19.465-5.197v-2.972h-3.81V8.17h3.81V5.212h-3.81V0h-3.753v5.212h-3.034v2.957h3.034v12.634h7.563zm7.33 0v-9.02c0-1.145.29-2.068.872-2.77.58-.702 1.39-1.053 2.425-1.053.9 0 1.54.254 1.92.761.382.508.572 1.22.572 2.136v9.946h3.753V10.588c0-1.792-.406-3.198-1.217-4.219-.811-1.02-2.076-1.53-3.796-1.53-1.085 0-1.996.229-2.734.687-.738.458-1.336 1.105-1.796 1.941V0h-3.752v20.803h3.752zm20.154.373c1.867 0 3.393-.48 4.58-1.44 1.188-.962 1.904-2.308 2.148-4.04h-3.752c-.098.796-.406 1.413-.924 1.851-.518.438-1.187.657-2.008.657s-1.532-.256-2.133-.769c-.6-.512-.901-1.237-.901-2.173v-1.03h9.835v-1.926a9.013 9.013 0 00-.476-2.972 6.777 6.777 0 00-1.378-2.367 6.452 6.452 0 00-2.17-1.56c-.845-.38-1.785-.568-2.82-.568-1.037 0-1.98.194-2.83.582a6.167 6.167 0 00-2.177 1.65c-.6.712-1.067 1.568-1.4 2.569-.332 1-.498 2.113-.498 3.338 0 1.224.157 2.34.47 3.345.312 1.005.764 1.867 1.355 2.583a6.128 6.128 0 002.17 1.673c.855.398 1.824.597 2.91.597zm3.005-9.916h-5.995v-.552c0-.857.283-1.553.85-2.091.567-.538 1.28-.807 2.14-.807.87 0 1.588.27 2.155.807.567.538.85 1.234.85 2.09v.553zm13.75 9.916c.84 0 1.629-.12 2.366-.358a5.993 5.993 0 001.98-1.075 5.5 5.5 0 001.414-1.785c.361-.712.59-1.556.689-2.531h-3.753c-.117 1.035-.418 1.757-.901 2.165-.484.408-1.146.612-1.986.612-.84 0-1.525-.27-2.053-.813-.527-.543-.791-1.292-.791-2.248v-4.286c0-1.035.278-1.802.835-2.3a2.871 2.871 0 011.98-.747c.761 0 1.394.195 1.897.583.504.388.804 1.08.902 2.076h3.752c-.088-.986-.315-1.835-.681-2.547a5.182 5.182 0 00-1.437-1.754 5.924 5.924 0 00-1.986-1.008 8.167 8.167 0 00-2.301-.321c-1.056 0-2.003.189-2.844.567a6.045 6.045 0 00-2.162 1.635c-.6.712-1.063 1.578-1.385 2.599-.322 1.02-.484 2.173-.484 3.457 0 1.205.147 2.3.44 3.286.293.985.735 1.831 1.327 2.538a6.187 6.187 0 002.176 1.658c.86.398 1.862.597 3.005.597zm16.533 0c1.144 0 2.16-.194 3.05-.582a6.066 6.066 0 002.25-1.673c.61-.726 1.074-1.588 1.392-2.583.317-.996.476-2.106.476-3.33 0-1.225-.159-2.338-.476-3.338-.318-1-.782-1.862-1.393-2.584a6.102 6.102 0 00-2.25-1.665c-.889-.388-1.905-.582-3.049-.582-1.143 0-2.16.194-3.049.582-.889.388-1.639.943-2.25 1.665s-1.077 1.583-1.4 2.584c-.322 1-.483 2.113-.483 3.337 0 1.225.161 2.335.484 3.33.322.996.789 1.858 1.4 2.584a6.066 6.066 0 002.25 1.673c.889.388 1.905.582 3.048.582zm0-2.972c-.938 0-1.717-.256-2.338-.769-.62-.512-.93-1.237-.93-2.173v-4.524c0-.936.31-1.658.93-2.166.62-.508 1.4-.762 2.338-.762.938 0 1.718.25 2.338.747.62.498.931 1.225.931 2.18v4.525c0 .966-.31 1.698-.93 2.196-.621.498-1.4.746-2.339.746zm14.76 2.599v-9.02c0-1.145.275-2.068.822-2.77.547-.702 1.27-1.053 2.17-1.053h.028c1.447 0 2.17.966 2.17 2.897v9.946h3.752v-9.02c0-1.145.276-2.068.828-2.77.553-.702 1.278-1.053 2.177-1.053h.03c1.436 0 2.154.966 2.154 2.897v9.946h3.753V10.588c0-1.792-.394-3.198-1.18-4.219-.787-1.02-1.962-1.53-3.526-1.53-2.11 0-3.664.97-4.66 2.912-.343-.936-.868-1.655-1.577-2.158-.708-.503-1.614-.754-2.719-.754-1.016 0-1.864.229-2.543.687-.679.458-1.238 1.105-1.678 1.941V5.212h-3.753v15.591h3.753zm30.607.373c1.016 0 1.905-.214 2.668-.642a5.521 5.521 0 001.89-1.747c.499-.737.868-1.598 1.107-2.584.24-.985.36-2.05.36-3.196 0-1.125-.12-2.187-.36-3.188-.24-1-.608-1.867-1.107-2.598a5.548 5.548 0 00-1.89-1.74c-.763-.428-1.652-.642-2.668-.642-1.026 0-1.908.219-2.646.657a5.324 5.324 0 00-1.825 1.822V0h-3.752v20.803h3.752v-2.106a5.302 5.302 0 001.832 1.822c.743.438 1.623.657 2.639.657zm-1.026-2.972c-1.202 0-2.077-.365-2.624-1.097-.547-.732-.82-1.71-.82-2.935v-2.33c0-1.224.273-2.202.82-2.934.547-.732 1.422-1.098 2.624-1.098.987 0 1.759.27 2.316.807.557.538.835 1.264.835 2.18v4.406c0 .916-.28 1.645-.843 2.188-.562.542-1.331.813-2.308.813zm14.731-14.8V0h-3.87v3.405h3.87zm-.059 17.399V5.212h-3.752v15.591h3.752zm8.37 0v-9.02c0-1.145.29-2.068.872-2.77.582-.702 1.39-1.053 2.426-1.053.9 0 1.54.254 1.92.761.381.508.572 1.22.572 2.136v9.946h3.752V10.588c0-1.792-.405-3.198-1.216-4.219-.811-1.02-2.077-1.53-3.797-1.53-1.084 0-1.996.229-2.733.687-.738.458-1.337 1.105-1.796 1.941V5.212h-3.752v15.591h3.752zm17.941.373c1.183 0 2.138-.251 2.866-.754.728-.503 1.312-1.182 1.752-2.038h.132l.029 2.419h5.907v-2.972h-2.58v-7.646c0-1.752-.532-3.081-1.597-3.987-1.066-.906-2.517-1.36-4.354-1.36a9.23 9.23 0 00-2.55.337c-.782.224-1.456.55-2.023.978a4.83 4.83 0 00-1.363 1.605c-.342.642-.523 1.392-.543 2.248h3.753c0-.717.24-1.262.718-1.636.479-.373 1.1-.56 1.862-.56.742 0 1.329.182 1.759.546.43.363.645.953.645 1.77v1.015l-4.237.358c-1.622.15-2.863.682-3.723 1.598-.86.916-1.29 2.006-1.29 3.27 0 .717.12 1.365.36 1.942.239.577.578 1.08 1.018 1.508.44.428.95.762 1.532 1a5.025 5.025 0 001.927.36zm1.32-2.972c-.665 0-1.207-.117-1.627-.35-.42-.234-.63-.585-.63-1.053v-1.344c.01-.618.293-.956.85-1.016l4.5-.403v.612c0 .986-.277 1.825-.829 2.517-.552.692-1.307 1.037-2.264 1.037zm21.122 2.599v-2.972h-3.811V8.17h3.81V5.212h-3.81V0h-3.753v5.212h-3.034v2.957h3.034v12.634h7.564zm9.967.373c1.144 0 2.16-.194 3.05-.582a6.066 6.066 0 002.25-1.673c.61-.726 1.074-1.588 1.392-2.583.317-.996.476-2.106.476-3.33 0-1.225-.159-2.338-.476-3.338-.318-1-.782-1.862-1.393-2.584a6.102 6.102 0 00-2.25-1.665c-.89-.388-1.905-.582-3.049-.582-1.143 0-2.16.194-3.049.582-.889.388-1.639.943-2.25 1.665s-1.077 1.583-1.4 2.584c-.322 1-.483 2.113-.483 3.337 0 1.225.161 2.335.484 3.33.322.996.789 1.858 1.4 2.584a6.066 6.066 0 002.25 1.673c.889.388 1.905.582 3.048.582zm0-2.972c-.938 0-1.717-.256-2.338-.769-.62-.512-.93-1.237-.93-2.173v-4.524c0-.936.31-1.658.93-2.166.62-.508 1.4-.762 2.338-.762.938 0 1.718.25 2.338.747.62.498.931 1.225.931 2.18v4.525c0 .966-.31 1.698-.93 2.196-.621.498-1.4.746-2.339.746zm14.76 2.599V8.199H261V5.212h-8.546v15.591h3.753zM6.556 8.328c.066.49.16 1 .286 1.527a26.752 26.752 0 013.49-.578l.62 1.215-.278.394c-.337.487-.665 1-.987 1.532a27.04 27.04 0 00-1.14 2.1c.348.706.727 1.407 1.146 2.096.429.706.875 1.374 1.331 2 .815.064 1.646.1 2.477.1.542 0 1.082-.015 1.618-.044l.932 1.83-.134.167a24.928 24.928 0 01-1.53 1.685c1.399 1.236 2.734 2.036 3.794 2.329l.659 1.293h-.019c-1.486-.085-3.382-1.093-5.298-2.795C11.519 24.969 9.538 26 8.024 26c-.462 0-.88-.095-1.238-.295-1.552-.853-1.904-3.517-1.112-6.865C2.24 17.835 0 16.214 0 14.503c0-1.706 2.229-3.322 5.652-4.332-.346-1.45-.477-2.771-.387-3.872h1.234c-.057.59-.041 1.278.056 2.029zm12.86 16.431l.587 1.048-.107.036-.544-1.069c.022-.004.044-.01.065-.015zM6.853 19.157c-.121.532-.22 1.053-.28 1.548-.254 2.01.07 3.574.82 3.985.164.09.373.137.621.142 1.145 0 2.829-.874 4.623-2.47a25.98 25.98 0 01-2.29-2.631 27.777 27.777 0 01-3.494-.574zm8.172.69c-.5.026-1.012.036-1.53.036-.511 0-1.018-.015-1.513-.037.506.616 1.018 1.18 1.53 1.685a20.832 20.832 0 001.513-1.685zm-7.121-3.912c-.286.7-.54 1.4-.743 2.08.721.168 1.475.305 2.256.415-.27-.4-.533-.81-.792-1.232a24.598 24.598 0 01-.721-1.263zm-1.948-4.627c-.534.163-1.051.337-1.525.531-1.948.79-3.208 1.838-3.208 2.664 0 .827 1.26 1.869 3.208 2.664.48.195.996.374 1.541.537a24.24 24.24 0 011.222-3.19 24.592 24.592 0 01-1.238-3.206zm6.168 1.485l2.14 4.197c-.08.007-.162.01-.244.01-1.434 0-2.596-1.119-2.596-2.5 0-.66.266-1.26.7-1.707zM9.41 10.576c-.787.11-1.547.253-2.268.416.21.684.463 1.39.76 2.095a29.35 29.35 0 011.508-2.511z"></path>
        <path
          stroke={isDark ? gray[9] : gray[1]}
          strokeWidth="0.3"
          d="M6.828 2.032L19.295 25.98h4.897L11.438 2.032zm-.066.067l-1.44 3.976 3.606-.005-2.146-4.038zm19.002 19.667l-1.572 4.214-2.244-4.214z"
        ></path>
      </g>
    </svg>
  );
};

export default Logo;
