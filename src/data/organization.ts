import type { OrganisasiItem } from './types';
import kepalaDesaPhoto from '../assets/images/kepala_desa.png';

export const kepalaDesa: OrganisasiItem = {
  name: 'Sandi Bambang. Sudjono, S.E.',
  role: 'Pj. Kepala Desa',
  photo: kepalaDesaPhoto
};

export const sekretarisDesa: OrganisasiItem = {
  name: 'Subaedi, SE',
  role: 'Sekretaris Desa / Carik'
};

export const kaurList: OrganisasiItem[] = [
  { name: 'Fisca Fadillah', role: 'Kaur Umum' },
  { name: 'Putri Sulistyoningrum', role: 'Kaur Keuangan' },
  { name: 'Moch. Ainul Cholidian', role: 'Kaur Perencanaan' }
];

export const kasiList: OrganisasiItem[] = [
  { name: 'Sanudi, S. Pd.', role: 'Kasi Pemerintahan' },
  { name: 'Kusniawati', role: 'Kasi Kesejahteraan' },
  { name: 'Mustofa', role: 'Kasi Pelayanan' }
];

export const kadusList: OrganisasiItem[] = [
  { name: 'Sodikin', role: 'Kasun Ngenep' },
  { name: 'Adhim Masrur Ovanudin', role: 'Kasun Lowoksari dan Kubung' },
  { name: 'Mulyono', role: 'Kasun Baba\'an' },
  { name: 'Saibah Ahmad', role: 'Kasun Curahkembang' },
  { name: 'Mochamad Muslimin', role: 'Kasun Genitri' },
  { name: 'Muliono', role: 'Kasun Mojosari' },
  { name: 'Eko Tumpangrejo', role: 'Kasun Tumpangrejo' }
];
