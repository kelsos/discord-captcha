import type { API, APIInteraction } from '@discordjs/core';

export const dataDirCommand = {
  data: {
    description: 'Links to the documentation for the data directory location',
    name: 'datadir',
  },
  async execute(interaction: APIInteraction, api: API) {
    await api.interactions.reply(interaction.id, interaction.token, {
      content:
        'You can find the default data directory locations at https://rotki.readthedocs.io/en/stable/usage_guide.html#rotki-data-directory',
    });
  },
};
