import 'dotenv/config';

import { writeAgentCatalog } from '../src/utils/agent/catalog';
import { fetchAgentTalks } from '../src/utils/agent/contentful-talks';

async function main() {
  if (!process.argv.includes('--talks')) {
    await writeAgentCatalog();
    return;
  }

  try {
    await writeAgentCatalog(await fetchAgentTalks());
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Talk catalog was not refreshed from Contentful. Existing talk records were kept. ${message}`);
    await writeAgentCatalog();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
