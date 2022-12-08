import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { FindPostContainer } from './styles';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface FindPostProps {
  postsLenght: number;
  getPosts: (query?: string) => Promise<void>;
}

export function FindPost({ postsLenght, getPosts }: FindPostProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <FindPostContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLenght} publicações</span>
      </header>

      <input type='text' placeholder='Buscar conteúdo' {...register('query')} />
    </FindPostContainer>
  );
}
