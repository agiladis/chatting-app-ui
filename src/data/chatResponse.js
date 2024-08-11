export const chatResponse = {
  results: {
    rooms: [
      {
        name: 'Product A',
        id: 12456,
        image_url: 'https://picsum.photos/id/237/200/300',
        participant: [
          {
            id: 'admin@mail.com',
            name: 'Admin',
            role: 0,
          },
          {
            id: 'agent@mail.com',
            name: 'Agent A',
            role: 1,
          },
          {
            id: 'customer@mail.com',
            name: 'king customer',
            role: 2,
          },
        ],
        comments: [
          {
            id: 885512,
            type: 'text',
            message: 'Selamat malam',
            sender: 'customer@mail.com',
          },
          {
            id: 885513,
            type: 'text',
            message: 'Malam',
            sender: 'agent@mail.com',
          },
          {
            id: 885514,
            type: 'text',
            message: 'Ada yang bisa saya bantu?',
            sender: 'agent@mail.com',
          },
          {
            id: 885515,
            type: 'text',
            message:
              'Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal',
            sender: 'customer@mail.com',
          },
          {
            id: 885516,
            type: 'text',
            message: 'Baik, silahkan kirimkan lampiran bukti pembayarannya',
            sender: 'agent@mail.com',
          },
        ],
      },
      {
        name: 'Product B',
        id: 12457,
        image_url: 'https://picsum.photos/id/238/200/300',
        participant: [
          {
            id: 'admin@mail.com',
            name: 'Admin',
            role: 0,
          },
          {
            id: 'agent@mail.com',
            name: 'Agent B',
            role: 1,
          },
          {
            id: 'customer2@mail.com',
            name: 'queen customer',
            role: 2,
          },
        ],
        comments: [
          {
            id: 885517,
            type: 'text',
            message: 'Halo, ada yang bisa saya bantu?',
            sender: 'agent@mail.com',
          },
          {
            id: 885518,
            type: 'text',
            message: 'Saya ingin bertanya tentang produk B',
            sender: 'customer2@mail.com',
          },
        ],
      },
    ],
  },
};
