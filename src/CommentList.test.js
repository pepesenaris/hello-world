import React from 'react';
import CommentList from './CommentList';
import renderer from 'react-test-renderer';

const comments = [{ text: 'Comment 1', id: 1}, { text: 'Comment 2', id: 2}];

test('it renders a list of comments', () => {
  const component = renderer.create(
    <CommentList comments={comments}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders message when no comments', () => {
  const component = renderer.create(
    <CommentList comments={[]}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
