import { BASE_PATH } from './basePath';

export async function getToursList() {
  const res = await fetch(`${BASE_PATH}/api/tour-packages`);
  if (!res.ok) throw new Error('Failed to fetch packages');
  return res.json();
}

export async function getTourDetail(id: number | string) {
  const res = await fetch(`${BASE_PATH}/api/tour-packages/${id}`);
  if (!res.ok) throw new Error('Failed to fetch package details');
  return res.json();
}

export async function createTour(data: any) {
  const res = await fetch(`${BASE_PATH}/api/tour-packages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.error || 'Failed to create package');
  }
  return res.json();
}

export async function updateTour(id: number | string, data: any) {
  const res = await fetch(`${BASE_PATH}/api/tour-packages/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.error || 'Failed to update package');
  }
  return res.json();
}

export async function deleteTour(id: number | string) {
  const res = await fetch(`${BASE_PATH}/api/tour-packages/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Failed to delete package');
  return res.json();
}

export async function updateTourStatus(id: number | string, status: 'published' | 'draft') {
  const res = await fetch(`${BASE_PATH}/api/tour-packages/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });
  if (!res.ok) throw new Error('Failed to update package status');
  return res.json();
}
