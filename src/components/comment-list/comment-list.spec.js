import React from 'react'
import {shallow, render, mount} from 'enzyme'
import DecoratedCommentList, {CommentList} from './index'
import articles from '../../fixtures'


describe('CommentList', () => {

    it('should have all comments closed by default', function () {
        const wrapper = render(<DecoratedCommentList comments = {articles[0].comments}/>)
        expect(wrapper.find('.test--comment-list__body').length).toEqual(0)
    });

    it('should open first comments', () => {
        const wrapper = mount(<DecoratedCommentList comments = {articles[0].comments}/>)
        expect(wrapper.find('.test--comment-list__body').length).toEqual(0)

        wrapper.find('.test--comment-list__btn').at(0).simulate('click')
        expect(wrapper.find('.test--comment-list__body').length).toEqual(1)
    });
});