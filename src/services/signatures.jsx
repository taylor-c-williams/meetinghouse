import { client, parseData } from './client';

export async function getSignatures() {
  const request = await client.from('signatures').select().order('last_name');
  return parseData(request);
}

export async function getSignatureById(id) {
  const request = await client
    .from('signatures')
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
    .from('signatures')
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
    .from('signatures')
    .insert({ first_name, last_name, email, email_updates });
  return parseData(request);
}

export async function deleteSignatureById(id) {
  const request = await client.from('signatures').delete().match({ id });
  return parseData(request);
}
