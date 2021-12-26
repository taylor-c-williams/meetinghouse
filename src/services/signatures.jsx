import { client, parseData } from './client';

export async function getSignatures() {
  const request = await client.from('signatures_2').select().order('last_name');
  return parseData(request);
}

export async function getSignatureById(id) {
  const request = await client
    .from('signatures_2')
    .select('*')
    .match({ id })
    .single();
  return parseData(request);
}

export async function updateSignatureById(
  id,
  { first_name, last_name, email }
) {
  const request = await client
    .from('signatures_2')
    .update({ first_name, last_name, email })
    .match({ id });
  return parseData(request);
}

export async function createSignature({
  first_name,
  last_name,
  email,
  email_updates,
}) {
  const request = await client
    .from('signatures_2')
    .insert({ first_name, last_name, email, email_updates });
  return parseData(request);
}

export async function deleteSignatureById(id) {
  const request = await client.from('signatures_2').delete().match({ id });
  return parseData(request);
}
